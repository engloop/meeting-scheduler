import React, {Component} from 'react';
import { get_meeting_data } from '../utils/http_functions';
import { Container, Row, Col } from 'react-bootstrap';
import {Table} from './Table';


export class Coordinate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meetingId: this.props.match.params.meetingId,
			meetingName:"",
			meetingDates:["x"],
			tableData:[
	          {'fruit': 'Apple', 'cost': 100},
	          {'fruit': 'Orange', 'cost': 50},
	          {'fruit': 'Banana', 'cost': 35},
	          {'fruit': 'Mango', 'cost': 70},
	          {'fruit': 'Pineapple', 'cost': 45},
	          {'fruit': 'Papaya', 'cost': 40},
	          {'fruit': 'Watermelon', 'cost': 35}
	        ]
		}
	};

	 componentDidMount() {
	 	get_meeting_data(this.state.meetingId)
	 	.then(response => {
 			console.log(response);
 			this.setState({
 				meetingName: response["data"]["meetingName"],
 				meetingDates: response["data"]["dates"]
 			});
		})
  }

  render() {
  	console.log("coordinate");
  	console.log(this.state.meeteingName);
  	console.log(this.state.meetingDates);
  	return(
  		<Container>
  			<div class="with-margin">
	  			<h1>{this.state.meetingName}</h1>
	  		</div>
	  		<Table data={this.state.meetingDates}/>
	  	</Container>
  	);
  
  }

}