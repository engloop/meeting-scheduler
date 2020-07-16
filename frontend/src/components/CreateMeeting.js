import React, {Component, useState} from 'react';
import {Form, Col, Row, Button, Container} from 'react-bootstrap'
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

import "react-datepicker/dist/react-datepicker.css";


export class CreateMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			endDate: new Date(),
			value: [new Date(), new Date()]
		}
	    
  };

  onChange(value) {

  	console.log(value);
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
	    			<Form.Control type="text" placeholder="Meeting Name" />
				</Form.Row>
				<Form.Row className="with-margin">
		      		<DateRangePicker
		      			value={this.state.value}
		      			onChange={(value) => this.onChange(value)}
		      		/>
		    	</Form.Row>
		      
		    	<Button variant="primary" type="submit">
    				Submit
  				</Button>
		     
	      </Form>
	      </Row>
	      </Container>
	    );
  }

}