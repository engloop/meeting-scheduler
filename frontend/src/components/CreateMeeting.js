import React, {Component, useState} from 'react';
import {Form, Col, Row, Button, Container} from 'react-bootstrap'
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import PropTypes from 'prop-types';
import { submit_meeting } from '../utils/http_functions';
// import {withRouter, BrowserRouter, Switch, Route } from 'react-router-dom';


export class CreateMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dates: [new Date(), new Date()],
			meetingName: "",
		}
  };

  changeValue(e,type) {
  	const value=e.target.value;
  	const next_state={}
  	next_state[type]=value;
  	this.setState(next_state, () => {
  		// console.log(this.state);
  	});
  }

  changeDateRange(e) {
  	const startDate=e[0];
  	const endDate=e[1];
  	const next_state={}
  	next_state["dates"]=[startDate, endDate];
  	this.setState(next_state, () => {
  		console.log(this.state);
  	});
  }


  handleSubmit(e) {
  	e.preventDefault();
	submit_meeting(this.state)
	.then(response => {
		var meetingId=response.data;
		this.props.history.push(`/meeting-success/${meetingId}`);
	})
	.catch(e => {
		alert(e);
	});
  }
  

	render() {
	    return (
	    	<Container>
	    	<Row>
	    	<h1>Create a new meeting!</h1>
	    	</Row>
	    	<Row>
	    	<Form>
	    		<Form.Row className="with-margin">
	    			<Form.Control type="text" placeholder="Meeting Name" onChange={(value)=>this.changeValue(value, 'meetingName')}/>
				</Form.Row>
				<Form.Row className="with-margin">
		      		<DateRangePicker
		      			value={this.state.dates}
		      			onChange={(value) => this.changeDateRange(value)}
		      		/>
		    	</Form.Row>
		    	<Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)}>
    				Submit
  				</Button>
		     
	      </Form>
	      </Row>
	      </Container>
	    );
  }

}

CreateMeeting.propTypes = {
	submitMeeting: PropTypes.func,
}