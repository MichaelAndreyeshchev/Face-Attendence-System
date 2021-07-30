from face_recognition.api import face_distance
import numpy as np
import face_recognition
import cv2
import os

images_path = "registered-images"
images = []
names = []
image_list = os.listdir(images_path)

for img in image_list:
    cur_image = cv2.imread(f"{images_path}/{img}")
    images.append(cur_image)
    names.append(os.path.splitext(img)[0])

print(names)

connor = face_recognition.load_image_file('images/Connor McGregor.jpg')
connor = cv2.cvtColor(connor, cv2.COLOR_BGR2RGB)
connor_test = face_recognition.load_image_file('images/Connor McGregor Test Image.jpg')
connor_test = cv2.cvtColor(connor_test, cv2.COLOR_BGR2RGB)