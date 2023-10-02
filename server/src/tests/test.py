# from deepface import DeepFace
import cv2
import face_recognition
from json import dump, load
from numpy import array

from mongodb import MongoDbConfig

def time(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Time taken by {func.__name__}: {end-start}")
        return result
    return wrapper

# img1 = cv2.imread("assets/ashif1.jpg")
# img2 = cv2.imread("assets/ashif2.jpg")

# grey1 = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
# grey2 = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)

img1 = face_recognition.load_image_file('../assets/missing/data12.jpg')
img2 = face_recognition.load_image_file('../assets/ibr2.jpg')

rgb1 = cv2.cvtColor(img1, cv2.COLOR_BGR2RGB)
rgb2 = cv2.cvtColor(img2, cv2.COLOR_BGR2RGB)

face_locations_1 = face_recognition.face_locations(rgb1)
face_locations_2 = face_recognition.face_locations(rgb2)
# print(face_locations_1)
# print(face_locations_2)

face_encodings_1 = []
face_encodings_2 = []

@time
def convert_to_encoding():
    global face_encodings_1, face_encodings_2
    face_encodings_1 = face_recognition.face_encodings(rgb1, face_locations_1)[0]
    face_encodings_2 = face_recognition.face_encodings(rgb2, face_locations_2)[0]

convert_to_encoding()

# print(face_encodings_1)
# print(type(face_encodings_1))  
# print(face_encodings_2) 
# print(type(face_encodings_2))
face_encodings = {}

@time
def dump_json():
    global face_encodings
    face_encodings = {
        "face_encodings_1": face_encodings_1.tolist(),
        "face_encodings_2": face_encodings_2.tolist()
    }
    with open('../assets/face_encodings.json', 'w') as f:
        dump(face_encodings, f)

dump_json()

@time
def check_face():
    with open('../assets/face_encodings.json', 'r') as f:
        face_encodings = load(f)
    # face_encodings_1 = face_recognition.face_encodings(rgb1)[0]
    # face_encodings_2 = face_recognition.face_encodings(rgb2)[0]

    # is_same_person = face_recognition.compare_faces([face_encodings_1], face_encodings_2)
    # is_same_person = face_recognition.compare_faces([array(face_encodings["face_encodings_1"])], array(face_encodings["face_encodings_2"]))
    # print(is_same_person)

    mongodb = MongoDbConfig()
    mongodb.connect('Rescufy')
    collection = mongodb.db['MissingChildrenEncodings']
    enc = collection.find_one({})['encoding']

    # match_percentage = face_recognition.face_distance([array(face_encodings["face_encodings_1"])], array(face_encodipipngs["face_encodings_2"]))[0]
    match_percentage = face_recognition.face_distance([array(face_encodings["face_encodings_1"])], array(enc))[0]
    print((1 - match_percentage) * 100, '%')
    
check_face()

# cv2.imshow('1', img1)
# cv2.imshow('2', img2)

# cv2.waitKey(0)
# cv2.destroyAllWindows()

# result = DeepFace.verify(img1, img1)
# result = DeepFace.verify(img1, img2, model_name="VGG-Face", distance_metric='euclidean_l2')
# result = cv2.face_compare(gray1, gray2)


# print(result)