import React, {Component, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export class AfterCreate extends React.Component {
	constructor(props) {
		super(props);
		// console.log("AfterCreate constructor");
		console.log(props);
		// console.log(props.location);
		// state = {
		// 	meetingName: this.props.location.state.meetingName
		// }
	    
  };

	render() {
		return (
			<Container>
				<h1>meeting created!</h1>
				<p>Share this link to invite friends to your meeting: </p>
			</Container>
		);

	}
}
