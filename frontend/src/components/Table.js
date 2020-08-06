import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { submit_availability } from '../utils/http_functions';
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

export class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			datesAvailable: {},
			userName: "",
			dateCounts: {}
		}
	}

	componentDidMount() {
		this.props.data.map((date)=>{
			this.state.datesAvailable[date]=false;
  	});
		this.setState({
			dateCounts: this.props.dateCounts
		});
  }

	getAvailabilityCounts() {
		return this.props.data.map((date)=> {
				return <td class="counts">{this.state.dateCounts[date]}</td>
			})

	}

	getLastRow() {
		return this.props.data.map((date)=>{
			return <td> <input id={date} type="checkbox" onChange={(value)=>this.updateDatesAvailable(value)}/></td>
		});
	}

	getMiddleRows() {
		return this.props.prev.map((data)=>{
			return (
				<tr>
					<td>{data["userName"]}</td>
					{this.props.data.map((date)=>{
						return <td> <input type="checkbox" disabled={true} checked={data["datesAvailable"][date]} /></td>
					})}
				</tr>
			)
		});
	}


	handleSubmit(e) {
	  	e.preventDefault();
		submit_availability(this.props.id, this.state)
		.then(response => {

			// reload page to trigger Coordinate component to refetch data
			window.location.reload();
			
		})
		.catch(e => {
			alert(e);
		});
  	}



  	updateDatesAvailable(e) {
  		const changedDate=e.target.id;
  		const val=e.target.checked
  		this.setState(prevState=>({
  			datesAvailable: {
  				...prevState.datesAvailable,
  				[changedDate]:val
  			}
  		}))
  	}



 	getHeader() {
		return this.props.data.map((date)=>{
			return <th key={date}>{moment(date).format('D MMM')}</th>
	 	})
	 }

	 changeValue(e,type) {
	  	const value=e.target.value;
	  	const next_state={}
	  	next_state[type]=value;
	  	this.setState(next_state);
  }




	 render() {
	 	return (
	 		<Container>
	 		<div class="with-margin-small">
	 			<table>
	 				<thead>
	 					<tr>
	 						<th></th>
	 						{this.getHeader()}
	 					</tr>
	 				</thead>
	 				<tbody>
						{this.getMiddleRows()}
	 				
	 					<td><input type="text" class="name" placeholder="Name" onChange={(value)=>this.changeValue(value, 'userName')}/></td>
	 					{this.getLastRow()}

	 					<tr> 
	 						<td class="counts"></td>
	 						{this.getAvailabilityCounts()}
 						</tr>

	 			
	 				</tbody>
	 			</table>
	 			</div>
	 			<div>
 			  <Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)}>Submit</Button>
 			  </div>
	 		</Container>
	 	);
	 }
}