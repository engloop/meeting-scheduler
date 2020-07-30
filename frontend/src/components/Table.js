import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { submit_availability } from '../utils/http_functions';


export class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			datesAvailable: [],
			userName: ""
		}
	}

	getLastRow() {
		return this.props.data.map((date)=>{
			return <td> <input type="checkbox"/></td>
		})
	}

	handleSubmit(e) {
	  	e.preventDefault();
		submit_availability(this.state)
		.catch(e => {
			alert(e);
		});
  	}

 	getHeader() {
		return this.props.data.map((date)=>{
			return <th key={date}>{date.toUpperCase().slice(0,10)}</th>
	 	})
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
	 				<tr>
	 					<td><input type="text" /></td>
	 					{this.getLastRow()}
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