import axios from 'axios';


export function submit_meeting(data) {
	// console.log("submit_meeting");
	// console.log(data);
	return axios.post('/api/create', {
		data
	});
}

export function get_meeting_data(meeting_id) {
	return axios.get('/api/meeting', {
		meeting_id
	});
}