from flask import Blueprint, jsonify, request
from firebase_admin import firestore

bp = Blueprint('meeting', __name__, url_prefix='/api')
db = firestore.client()

@bp.route('/meeting', methods=(['GET', 'POST']))
def meeting():
	meeting_id = request.args["meeting_id"]
	meetings_ref = db.collection(u'meetings') 
	meeting_return = meetings_ref.document(meeting_id).get()
	return jsonify(meeting_return.to_dict())

# update availability data for meeting with given id
@bp.route('/meeting/<meeting_id>', methods=(['POST']))
def update_availability(meeting_id):
	req_obj = request.get_json()
	# print("req_obj", req_obj)

	doc=db.collection(u'meetings').document(meeting_id)

	# append new user availability to participants array
	doc.update({
		u'participants': firestore.ArrayUnion([req_obj['data']])
	})

	doc_data=doc.get().to_dict()
	for date in req_obj['data']['datesAvailable']:
		if req_obj['data']['datesAvailable'][date]:
			val=doc_data['allDates'][date]
			doc.update({
				'allDates.' + date: val+1
			})
		# print(req_obj['data']['datesAvailable'][date])

	print(doc.get().to_dict()['allDates'])
	return doc.get().to_dict()['allDates']


