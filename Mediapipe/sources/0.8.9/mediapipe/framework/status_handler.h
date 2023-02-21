// Copyright 2019 The MediaPipe Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#ifndef MEDIAPIPE_FRAMEWORK_STATUS_HANDLER_H_
#define MEDIAPIPE_FRAMEWORK_STATUS_HANDLER_H_

#include <string>
#include <type_traits>

#include "absl/memory/memory.h"
#include "mediapipe/framework/deps/registration.h"
#include "mediapipe/framework/mediapipe_options.pb.h"
#include "mediapipe/framework/packet_set.h"
#include "mediapipe/framework/packet_type.h"
#include "mediapipe/framework/port.h"
#include "mediapipe/framework/port/status.h"

namespace mediapipe {

// Pure virtual base class for status handlers.
//
// These classes take any number of input side packet packets and process the
// status resulting from a calculator graph run. The status may be OK (if the
// graph run was successful), or may indicate the failure of a PacketGenerator
// or Calculator.
//
// IMPORTANT: If a failure of a PacketGenerator results in missing external
// inputs that were requested (i.e., input side packets that should have been
// generated by a failing PacketGenerator or by a PacketGenerator that had not
// yet executed), the affected StatusHandler will be skipped.
class StatusHandler {
 public:
  StatusHandler(const StatusHandler&) = delete;
  StatusHandler& operator=(const StatusHandler&) = delete;
  virtual ~StatusHandler() = 0;

  // All subclasses of StatusHandler must implement these static functions with
  // the following signatures:
  //
  // static absl::Status FillExpectations(
  //     const MediaPipeOptions& extendable_options,
  //     PacketTypeSet* input_side_packets);
  //
  // static absl::Status HandlePreRunStatus(
  //     const MediaPipeOptions& extendable_options,
  //     const PacketSet& input_side_packets,
  //     const absl::Status& pre_run_status);
  //
  // static absl::Status HandleStatus(
  //     const MediaPipeOptions& extendable_options,
  //     const PacketSet& input_side_packets,
  //     const absl::Status& run_status);
  //
  // FillExpectations() is used to validate the graph and it is analogous to the
  // function in calculator.h, packet_generator.h, and packet_factory.h.
  //
  // HandlePreRunStatus() is executed after CalculatorGraph runs the packet
  // factories and generators to produce the input side packets, and before it
  // runs
  // the calculator graph. Calling HandlePreRunStatus at this point is useful so
  // that the handlers can record (at the earliest time possible) that we
  // started a graph run on a specific input.  Note that HandlePreRunStatus()
  // is not run if the graph fails in initialization (even if it fails
  // due to a PacketGenerator or PacketFactory returning an error).
  //
  // HandleStatus() is called after the graph run, so the handler can store the
  // run result of it. It is not called when the PRE-RUN status is not ok (when
  // the generation of input side packets fails).
  //
  // Subclasses must be registered with
  // REGISTER_STATUS_HANDLER(MyStatusHandler);
};

// Details for the registration of a StatusHandler follow. A user of
// StatusHandler does not need to know about the following code; its purpose is
// to provide functionality akin to virtual static functions.
namespace internal {

class StaticAccessToStatusHandler {
 public:
  virtual ~StaticAccessToStatusHandler() {}
  virtual absl::Status FillExpectations(
      const MediaPipeOptions& extendable_options,
      PacketTypeSet* input_side_packets) = 0;
  virtual absl::Status HandlePreRunStatus(
      const MediaPipeOptions& extendable_options,
      const PacketSet& input_side_packets,
      const absl::Status& pre_run_status) = 0;
  virtual absl::Status HandleStatus(const MediaPipeOptions& extendable_options,
                                    const PacketSet& input_side_packets,  //
                                    const absl::Status& run_status) = 0;
};

using StaticAccessToStatusHandlerRegistry =
    GlobalFactoryRegistry<std::unique_ptr<StaticAccessToStatusHandler>>;

// Functions for checking that the StatusHandler has the proper functions
// defined.
template <class T>
constexpr bool StatusHandlerHasFillExpectations(
    decltype(&T::FillExpectations) /* unused */) {
  typedef absl::Status (*FillExpectationsType)(
      const MediaPipeOptions& extendable_options,
      PacketTypeSet* input_side_packets);
  return std::is_same<decltype(&T::FillExpectations),
                      FillExpectationsType>::value;
}
template <class T>
constexpr bool StatusHandlerHasFillExpectations(...) {
  return false;
}
template <class T>
constexpr bool StatusHandlerHasHandlePreRunStatus(
    decltype(&T::HandlePreRunStatus) /* unused */) {
  typedef absl::Status (*HandlePreRunStatusType)(
      const MediaPipeOptions& extendable_options,
      const PacketSet& input_side_packets, const absl::Status& pre_run_status);
  return std::is_same<decltype(&T::HandlePreRunStatus),
                      HandlePreRunStatusType>::value;
}
template <class T>
constexpr bool StatusHandlerHasHandleStatus(
    decltype(&T::HandleStatus) /* unused */) {
  typedef absl::Status (*HandleStatusType)(
      const MediaPipeOptions& extendable_options,
      const PacketSet& input_side_packets, const absl::Status& run_status);
  return std::is_same<decltype(&T::HandleStatus), HandleStatusType>::value;
}
template <class T>
constexpr bool StatusHandlerHasHandleStatus(...) {
  return false;
}

// Provides access to the static functions within a specific sublcass of
// StatusHandler. See the same mechanism in calculator.h for a more detailed
// explanation.
template <typename StatusHandlerSubclass>
class StaticAccessToStatusHandlerTyped : public StaticAccessToStatusHandler {
 public:
  static_assert(
      std::is_base_of<StatusHandler, StatusHandlerSubclass>::value,
      "Classes registered with REGISTER_STATUS_HANDLER must be subclasses of "
      "mediapipe::StatusHandler.");
  static_assert(
      StatusHandlerHasFillExpectations<StatusHandlerSubclass>(nullptr),
      "FillExpectations() must be defined with the correct signature in every "
      "StatusHandler.");
  static_assert(
      StatusHandlerHasHandlePreRunStatus<StatusHandlerSubclass>(nullptr),
      "HandlePreRunStatus() must be defined with the correct signature in "
      "every StatusHandler.");
  static_assert(StatusHandlerHasHandleStatus<StatusHandlerSubclass>(nullptr),
                "HandleStatus() must be defined with the correct signature in "
                "every StatusHandler.");

  absl::Status FillExpectations(const MediaPipeOptions& extendable_options,
                                PacketTypeSet* input_side_packets) final {
    return StatusHandlerSubclass::FillExpectations(extendable_options,
                                                   input_side_packets);
  }

  absl::Status HandlePreRunStatus(const MediaPipeOptions& extendable_options,
                                  const PacketSet& input_side_packets,
                                  const absl::Status& pre_run_status) final {
    return StatusHandlerSubclass::HandlePreRunStatus(
        extendable_options, input_side_packets, pre_run_status);
  }

  absl::Status HandleStatus(const MediaPipeOptions& extendable_options,
                            const PacketSet& input_side_packets,
                            const absl::Status& run_status) final {
    return StatusHandlerSubclass::HandleStatus(extendable_options,
                                               input_side_packets, run_status);
  }
};

}  // namespace internal

// Macro for registering StatusHandlers. It actually just registers the
// StaticAccessToStatusHandlerTyped class.
#define REGISTER_STATUS_HANDLER(name)                           \
  REGISTER_FACTORY_FUNCTION_QUALIFIED(                          \
      mediapipe::internal::StaticAccessToStatusHandlerRegistry, \
      status_handler_registration, name,                        \
      absl::make_unique<                                        \
          mediapipe::internal::StaticAccessToStatusHandlerTyped<name>>)

}  // namespace mediapipe

#endif  // MEDIAPIPE_FRAMEWORK_STATUS_HANDLER_H_
