face_landmark.onnx is the ONNX model obtained from the MediaPipe original model face_landmark.tflite in
the Mediapipe\sources\0.8.9\mediapipe\modules\face_landmark directory by a conversion to ONNX.

face_landmark_with_ffd_regression.onnx is obtained from face_landmark.onnx by adding several layers
which adapt the original MediaPipe output to our data structures.
