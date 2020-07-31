import axios from 'axios';


export function submit_meeting(data) {
	return axios.post('/api/create', {
		data
	});
}

export function get_meeting_data(meeting_id) {
	return axios.get('/api/meeting', {
		params: {
			meeting_id: meeting_id
		}
		
	});
}

export function submit_availability(data) {
	return "";
}