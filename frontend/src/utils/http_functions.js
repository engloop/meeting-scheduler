import axios from 'axios';


export function submit_meeting(data) {
	return axios.post('/api/submit_meeting', {
		data
	});
}