
import uuid
from flask import Blueprint
from firebase_admin import firestore

bp = Blueprint('create', __name__, url_prefix='/create')
db = firestore.client()

@bp.route('/', methods=(['GET', 'POST']))
def create():
    id = str(uuid.uuid4())
    doc_ref = db.collection(u'meetings').document(id)
    doc_ref.set({
        u'title': u'Birthday Party',
        u'participants': u'participants list'
    })
    return 'create'

