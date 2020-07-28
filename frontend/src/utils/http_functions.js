import axios from 'axios';


export function submit_meeting(data) {
	return axios.get('/api/create', {
		data
	});
}

export function get_meeting_data(meeting_id) {
	return axios.get('/api/meeting', {
		meeting_id
	});
}