import React, {Component, useState} from 'react';
import { get_meeting_data } from '../utils/http_functions';
import { Container, Row, Col } from 'react-bootstrap';

export class Coordinate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meetingId: this.props.match.params.meetingId,
			meetingName:""
		}
	};

	 componentDidMount() {
	 	get_meeting_data(this.state.meetingId)
	 	.then(response => {
 			console.log(response);
 			this.setState({
 				meetingName: response["data"]["meetingName"]
 			});
		})
  }

  render() {
  	console.log(this.state.meetingName);
  	return(
  		<h1>{this.state.meetingName}</h1>
  	);
  
  }

}