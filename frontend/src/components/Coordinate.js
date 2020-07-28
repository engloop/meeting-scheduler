import { get_meeting_data } from '../utils/http_functions';

export class CreateMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meetingId: this.props.math.params.meetingId
		}
	};

	 compnentDidMount() {
  		get_meeting_data(this.state.meetingId);
  }

  render() {
  	return(
  	);
  
  }

}