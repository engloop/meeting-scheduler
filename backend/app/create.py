
import uuid
from flask import Blueprint
from flask import request
from firebase_admin import firestore

from .utils import get_dates_in_range

bp = Blueprint('create', __name__, url_prefix='/api')
db = firestore.client()

@bp.route('/create', methods=(['POST']))
def create():
	print("/api/create", request.method)
	req_obj = request.get_json()

	id = str(uuid.uuid4())
	all_dates=get_dates_in_range(req_obj['data']['dates'][0],req_obj['data']['dates'][1])

	# create document to store
	doc = {}
	doc["id"] = id
	doc["meetingName"] = req_obj['data']['meetingName']
	doc["dates"] = req_obj['data']['dates']
	doc["participants"] = []
	doc["allDates"]={key: 0 for key in all_dates}

	# dates are in ISO-8601 format
	# get_dates_in_range(start, stop)
	# print(doc)

	# push to firestore
	doc_ref = db.collection(u'meetings').document(id)
	doc_ref.set(doc)
	
	return id


