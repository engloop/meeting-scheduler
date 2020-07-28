
import uuid
from flask import Blueprint
from flask import request
from firebase_admin import firestore

bp = Blueprint('create', __name__, url_prefix='/api')
db = firestore.client()

@bp.route('/create', methods=(['POST']))
def create():
	print("/api/create", request.method)
	req_obj = request.get_json()
	# print(req_obj)
	
	id = str(uuid.uuid4())
	
	# create document to store
	doc = {}
	doc["id"] = id
	doc["meetingName"] = req_obj['data']['meetingName']
	doc["dates"] = req_obj['data']['dates']
	# print(doc)

	# push to firestore
	doc_ref = db.collection(u'meetings').document(id)
	doc_ref.set(doc)
	
	return id

