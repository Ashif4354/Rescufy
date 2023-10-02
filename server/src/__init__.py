from flask import Flask, request, jsonify
from flask_cors import CORS

from .registerchild import register_child
from .checkchild import check_child

from .config.mongodb import MongoDbConfig

rescufy_server = Flask(__name__)
CORS(rescufy_server)

@rescufy_server.route('/')
def index():
    return jsonify({'Response': 'Working'})

@rescufy_server.route('/checkchild', methods=['POST', 'GET'])
def checkchild():
    response = check_child(request)

    # if response['Found'] == True:
    #     pass
    # else:
    #     pass
    # print(response)
    return jsonify(response)

@rescufy_server.route('/missingchild', methods=['POST'])
def missing_child():
    # image = request.files['file']
    # image.save('missing_child.jpg')
    register_child(request)
    return jsonify({'Response': 'Child registered successfully'})

@rescufy_server.route('/viewcases', methods=['GET'])
def view_cases():
    mongodb = MongoDbConfig()
    mongodb.connect('Rescufy')
    collection = mongodb.db['MissingChildren']
    cases = list(collection.find({}))
    mongodb.disconnect()

    for case in cases:
        case['_id'] = str(case['_id'])
        case['image'] = 'data:image/png;base64,' + case['image'][1:].strip("'")
    
    return jsonify({'Response': 'Working', 'Cases': cases})
    