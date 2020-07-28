
from flask import Blueprint
from firebase_admin import firestore

bp = Blueprint('meeting', __name__, url_prefix='/api')
db = firestore.client()

@bp.route('/<meeting_id>', methods=(['GET', 'POST']))
def meeting(meeting_id):
    meetings_ref = db.collection(u'meetings')
    docs = meetings_ref.stream()
    for doc in docs:
        print(f'{doc.id} => {doc.to_dict()}')
    return 'meeting'
