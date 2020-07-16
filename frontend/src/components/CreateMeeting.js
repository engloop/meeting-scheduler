import React, {Component, useState} from 'react';
import {Form, Col, Row, Button} from 'react-bootstrap'
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

import "react-datepicker/dist/react-datepicker.css";
// import 'rsuite/lib/styles/index.less';


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
	    	<Form>
	    		<Form.Row>
	    			<Form.Control type="text" placeholder="Meeting Name" />
				</Form.Row>
				<Form.Row>
		      		<DateRangePicker
		      			value={this.state.value}
		      			onChange={(value) => this.onChange(value)}
		      		/>
		    	</Form.Row>
		      
		    	<Button variant="primary" type="submit">
    				Submit
  				</Button>
		     
	      </Form>
	    );
  }

}