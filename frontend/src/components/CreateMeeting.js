import React, {Component, useState} from 'react';
import {Form, Col, Row, Button, Container} from 'react-bootstrap'
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import PropTypes from 'prop-types';
import { submit_meeting } from '../utils/http_functions';
// import {withRouter, BrowserRouter, Switch, Route } from 'react-router-dom';


// import { bindActionCreators } from 'redux';
// import * as actionCreators from '../actions';
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(actionCreators, dispatch)
// }

export class CreateMeeting extends React.Component {
	constructor(props) {
		super(props);
		const redirectRoute='/after_create';
		this.state = {
			dates: [new Date(), new Date()],
			meetingName: "",
			redirectTo: redirectRoute,
		}
	    
  };

  changeValue(e,type) {
  	// console.log("changeValue");
  	// console.log(e);
  	const value=e.target.value;
  	const next_state={}
  	next_state[type]=value;
  	this.setState(next_state, () => {
  		// console.log(this.state);
  	});
  }

  changeDateRange(e) {
  	// console.log("changeDateRange");
  	// console.log(e);
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
  	// console.log(e);
	submit_meeting(this.state)
	// .then(parseJSON)
	.then(response => {
		dispatch(receiveMeetingData(response.result));
	})
	.catch(e => {
		alert(e);
	});
	this.props.history.push({
		pathname: '/meeting-success',
		// state: {meetingName: "Test Meeting"}
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