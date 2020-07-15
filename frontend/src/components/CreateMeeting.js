import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import { FormControl, InputLabel, FormHelperText, Input } from '@material-ui/core';


import "react-datepicker/dist/react-datepicker.css";


export class CreateMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date()
		}
	    
  };

	render() {
	    return (
	    	<form>
	    	<FormControl>
			  <InputLabel htmlFor="my-input">Meeting Name</InputLabel>
			  <Input id="my-input" aria-describedby="my-helper-text" />
			  <FormHelperText id="my-helper-text">Pick something creative!</FormHelperText>
			</FormControl>
			<FormControl>
		      <DatePicker
		      	selected={this.state.startDate}
		      />

		      </FormControl>
	      </form>
	    );
  }

}