import React, {Component, useState} from 'react';
// import { bindActionCreators } from 'redux';
import {Form, Col, Row, Button, Container} from 'react-bootstrap'
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// import * as actionCreators from '../actions';
import PropTypes from 'prop-types';
import { submit_meeting } from '../utils/http_functions';



// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(actionCreators, dispatch)
// }

export class CreateMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			endDate: new Date(),
			value: [new Date(), new Date()],
			meetingName: ""
		}
	    
  };

  changeValue(e,type) {
  	console.log("changeValue");
  	const value=e.target.value;
  	const next_state={}
  	next_state[type]=value;
  	this.setState(next_state, () => {
  		console.log(this.state);
  	});
  	
  }


  handleSubmit(e) {
  	e.preventDefault();
  	console.log(e);

	submit_meeting(this.props.startDate)
	// .then(parseJSON)
	.then(response => {
		dispatch(receiveMeetingData(response.result));
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
		      			value={this.state.value}
		      			onChange={(value) => this.changeValue(value)}
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