import base64
from io import BytesIO
from cv2 import cvtColor, COLOR_BGR2RGB
from face_recognition import load_image_file, face_locations, face_encodings

from .config.mongodb import MongoDbConfig

def get_encoding(image_data):
    image = load_image_file(BytesIO(image_data))
    rgb = cvtColor(image, COLOR_BGR2RGB)
    face_location = face_locations(rgb)
    face_encoding = face_encodings(rgb, face_location)[0]

    return face_encoding.tolist()

def register_child(request):   

    image = request.files['file']
    image_data = image.read()
    image_data_base_64 = base64.b64encode(image_data)
    # print(image_data)

    child = {
        'child_full_name' : request.form['fullName'],
        'age' : request.form['age'],
        'gender' : request.form['gender'],
        'physical_description' : request.form['physicalDescription'],
        'date_of_birth' : request.form['dateOfBirth'],
        'place_of_missing' : request.form['placeOfMissing'],
        'father_name' : request.form['fatherName'],
        'mother_name' : request.form['motherName'],
        'contact_number_1' : request.form['contactNumber1'],
        'contact_number_2' : request.form['contactNumber2'],
        'email' : request.form['email'],
        'address' : request.form['address'],
        'additional_info' : request.form['additionalInfo'],
        'image' : str(image_data_base_64),
        'status': 'Missing'
    }

    mongodb = MongoDbConfig()
    mongodb.connect('Rescufy')
    collection = mongodb.db['MissingChildren']
    inserted_id = collection.insert_one(child).inserted_id

    collection = mongodb.db['MissingChildrenEncodings']
    image_encoding = get_encoding(image_data)

    child_encoding = {
        'child_id': inserted_id,
        'encoding': image_encoding
    }

    collection.insert_one(child_encoding)
    
    mongodb.disconnect()

    






