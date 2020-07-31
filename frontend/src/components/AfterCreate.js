import React, {Component, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { get_meeting_data } from '../utils/http_functions';
import {Link } from "react-router-dom";


export class AfterCreate extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			meetingId: this.props.match.params.meetingId,
			meetingName:""
		}  
  };

  componentDidMount() {
  	const result=get_meeting_data(this.state.meetingId);
  }

	render() {
		return (
			<Container>
				<div class="with-margin">
				<h1>Your meeting was created!</h1>
				</div>
				<p>Share this link to invite friends to your meeting: </p>
				<Link to={`/meeting/${this.state.meetingId}`}>{window.location.host}/meeting/{this.state.meetingId}</Link>

			</Container>
		);

	}
}
