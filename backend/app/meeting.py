from flask import Blueprint, jsonify, request
from firebase_admin import firestore

bp = Blueprint('meeting', __name__, url_prefix='/api')
db = firestore.client()

@bp.route('/meeting', methods=(['GET', 'POST']))
def meeting():
	meeting_id = request.args["meeting_id"]
	print("meeting_id", meeting_id)
	meetings_ref = db.collection(u'meetings')
    
	meeting_return = meetings_ref.document(meeting_id).get()
	# print(meeting_return.to_dict())
    # print(meeting_return.getData())
    # docs = meetings_ref.stream()
    # for doc in docs:
    #     print(f'{doc.id} => {doc.to_dict()}')
	return jsonify(meeting_return.to_dict())

# update availability data for meeting with given id
@bp.route('/meeting/<meeting_id>', methods=(['POST']))
def update_availability(meeting_id):
	req_obj = request.get_json()
	# print(req_obj)

	# append new user availability to participants array
	db.collection(u'meetings').document(meeting_id).update({
		u'participants': firestore.ArrayUnion([req_obj['data']])
	})

	return jsonify(req_obj)