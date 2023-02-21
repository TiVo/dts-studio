From mediapipe-0.8.9.zip, we have used mediapipe-0.8.9/mediapipe/modules/face_landmark/face_landmark.tflite.
The model HAS BEEN MODIFIED to suit our data requirements as follows:

1. It has been converted to ONNX format.
2. Several layers have been appended at the output in order to change the original model output according to our needs.
3. The resulting ONNX model has been converted to the openVINO format.
