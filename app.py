from face_recognition.api import face_distance
import numpy as np
import face_recognition
import cv2

connor = face_recognition.load_image_file('images/Connor McGregor.jpg')
connor = cv2.cvtColor(connor, cv2.COLOR_BGR2RGB)
connor_test = face_recognition.load_image_file('images/Connor McGregor Test Image.jpg')
connor_test = cv2.cvtColor(connor_test, cv2.COLOR_BGR2RGB)

face_location = face_recognition.face_locations(connor)[0]
encoded_conner = face_recognition.face_encodings(connor)[0]
cv2.rectangle(connor, (face_location[3], face_location[0]), (face_location[1], face_location[2]), (255, 0, 255), 2)

face_location_test = face_recognition.face_locations(connor_test)[0]
encoded_conner_test = face_recognition.face_encodings(connor_test)[0]
cv2.rectangle(connor_test, (face_location_test[3], face_location_test[0]), (face_location_test[1], face_location_test[2]), (255, 0, 255), 2)

results = face_recognition.compare_faces([encoded_conner], encoded_conner_test)
face_distances = face_recognition.face_distance([encoded_conner], encoded_conner_test)
print(results, face_distances )
cv2.putText(connor, f"Match: {results} | Distance: {round(face_distances[0], 2)}", (50, 50), cv2.FONT_HERSHEY_PLAIN, 1, (0, 0, 255), 2)

cv2.imshow('Connor McGregor', connor)
cv2.imshow('Connor McGregor Test', connor_test)
cv2.waitKey(0)