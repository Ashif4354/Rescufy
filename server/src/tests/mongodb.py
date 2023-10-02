import pymongo

class MongoDbConfig:
    def __init__(self):
        self.mongodburl = 'mongodb://localhost:27017'

    def connect(self, db_name):
        self.client = pymongo.MongoClient(self.mongodburl)
        self.db = self.client[db_name]
    
    def disconnect(self):
        self.client.close()
