import React, {Component} from 'react';
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

export class Table extends React.Component {
	constructor(props) {
		super(props);
		console.log("table");
		console.log(this.props.data);
		// this.getHeader = this.getHeader.bind(this);
		// this.getRowsData = this.getRowsData.bind(this);
		// this.getKeys = this.getKeys.bind(this);
		this.statee={
			
		}
	}

	getDates(startDate, stopDate) {
	    var dateArray = [""];
	    var currentDate = moment(startDate);
	    var stopDate = moment(stopDate);
	    while (currentDate <= stopDate+1) {
	        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
	        currentDate = moment(currentDate).add(1, 'days');
	    }
	    return dateArray;
	}

	getLastRowText() {
		return 
	}

	getLastRow() {
		return <th><input type="text" /></th>
	}

 	getHeader() {
		var keys = Object.keys(this.props.data);
		const startDate=this.props.data[0];
		const endDate=this.props.data[1];
		console.log(startDate,endDate);
		const dates=this.getDates(startDate,endDate);
		console.log(dates);
		// console.log("keys", this.props.data[0]);

		return dates.map((date)=>{
			// d=this.props.data[key]
			return <th key={date}>{date.toUpperCase().slice(0,10)}</th>
	 	})
	 }



	 render() {
	 	return (
	 		<div>
	 			<table>
	 				<thead>
	 					<tr>{this.getHeader()}</tr>
	 				</thead>
	 				<tbody>
	 				<tr>
	 					<th><input type="text" /></th>
	 					{this.getLastRow()}
	 				</tr>
	 				</tbody>
	 			</table>
	 		</div>
	 	);
	 }
}