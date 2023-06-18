from mongoengine import Document, StringField, DateTimeField, IntField

class Post(Document):
    title = StringField(required=True, max_length=100)
    body = StringField(required=True)
    userId = IntField()
    id = IntField()
