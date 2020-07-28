import React, {Component, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';




export class AfterCreate extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			meetingId: this.props.match.params.meetingId
		}
		
	    
  };

	render() {
		console.log(this.state.meetingId);
		return (
			<Container>
				<h1>meeting {this.state.meetingId} created!</h1>
				<p>Share this link to invite friends to your meeting: </p>
				<p>www.xyz/meetings/{this.state.meetingId}</p>

			</Container>
		);

	}
}
