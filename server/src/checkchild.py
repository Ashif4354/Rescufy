from face_recognition import load_image_file, face_locations, face_encodings, compare_faces, face_distance
from numpy import array
import face_recognition
import base64
from io import BytesIO
from cv2 import cvtColor, COLOR_BGR2RGB

from .config.mongodb import MongoDbConfig

# def get_encoding(image_data):
#     # print(image_data)
#     image = load_image_file(BytesIO(image_data))
#     # print("image", image)
#     rgb = cvtColor(image, COLOR_BGR2RGB)
#     face_location = face_locations(rgb)
#     face_encoding = face_encodings(rgb, face_location)
#     print(face_encoding)

#     return face_encoding

def check_child(request):
    # print(request.form['capture'])

    response = {}

    # base64_string = request.files['image']
    # base64_string = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchLAAAAAElFTkSuQmCC"
    
    if request.form['capture'] == 'true':
        image = request.form['image']
        image = image[22:]
        image = bytes(image, 'utf-8')

        # print(image)
        # print(1)
        with open('temp_pics/child.jpeg', 'wb') as f:
            f.write(base64.decodebytes(image))
        # print(2)

        image = load_image_file('temp_pics/child.jpeg')
        rgb = cvtColor(image, COLOR_BGR2RGB)

        face_location = face_locations(rgb)

        try:
            face_encoding = face_encodings(rgb, face_location)[0]
            response['face_clear'] = True
        except IndexError:
            response['face_clear'] = False
            # print('NO FACE FOUND', response)
            return response


        # image_data = image.read()
        # # image_data_base_64 = base64.b64encode(image_data)
        # check_child_encoding = get_encoding(image_data)

        
        # binary_image = base64.b64decode(bytes(base64_string, 'utf-8'))
        # image = load_image_file(binary_image)
        # face_encodings = face_encodings(image)
    else:
        image = request.files['image']
        image_data = image.read()
        # image_data_base_64 = base64.b64encode(image_data)
        image = load_image_file(BytesIO(image_data))
        rgb = cvtColor(image, COLOR_BGR2RGB)

        face_location = face_locations(rgb)

        try:
            face_encoding = face_encodings(rgb, face_location)[0]
            response['face_clear'] = True
        except IndexError:
            response['face_clear'] = False
            # print('NO FACE FOUND', response)
            return response

    mongodb = MongoDbConfig()
    mongodb.connect('Rescufy')
    collection = mongodb.db['MissingChildrenEncodings']
    children_encodings = list(collection.find({}))
    collection2 = mongodb.db['MissingChildren']
    # mongodb.disconnect()
    # print(children_encodings)
    
    matches = [None, 0]

    for child_encoding in children_encodings:
        temp_encoding = array(child_encoding['encoding'])

        # results = compare_faces([face_encoding], temp_encoding)
        # print(results)

        face_match_percentage = face_distance([face_encoding], temp_encoding)[0]
        # if face_match_percentage:
        #     print(face_match_percentage, child_encoding['child_id'])

        face_match_percentage = (1 - face_match_percentage) * 100

        if face_match_percentage > 50:
            if face_match_percentage > matches[1]:
                matches[0] = child_encoding['child_id']
                matches[1] = face_match_percentage
            

        # print(matches)
    # print("FINAL", matches)
    if matches[0] != None:
        child = collection2.find_one({'_id': matches[0]})

        response['Found'] = True
        response['name'] = child['child_full_name']
        response['image'] = 'data:image/png;base64,' + child['image'][1:].strip("'")
        response['ph1'] = child['contact_number_1']
        response['ph2'] = child['contact_number_2']
        response['address'] = child['address']
        response['match_percentage'] = matches[1]
        
    else:
        response['Found'] = False

    mongodb.disconnect()

    return response


    
        
        