import React, {Component} from 'react';
import { get_meeting_data } from '../utils/http_functions';
import { Container, Row, Col } from 'react-bootstrap';
import {Table} from './Table';
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);


export class Coordinate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meetingId: this.props.match.params.meetingId,
			meetingName:"",
			meetingDates:["2020-01-01"],
	
		}
	};

	getDates(startDate, stopDate) {
	    var dateArray = [];
	    var currentDate = moment(startDate);
	    var stopDate = moment(stopDate);
	    while (currentDate <= stopDate+1) {
	        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
	        currentDate = moment(currentDate).add(1, 'days');
	    }
	    return dateArray;
	}


	 componentDidMount() {
	 	get_meeting_data(this.state.meetingId)
	 	.then(response => {
 			console.log(response);
 			const dates=this.getDates(response["data"]["dates"][0],response["data"]["dates"][1]);
 			this.setState({
 				meetingName: response["data"]["meetingName"],
 				meetingDates: dates
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