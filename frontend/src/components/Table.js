import React, {Component} from 'react';


export class Table extends React.Component {
	constructor(props) {
		super(props);
		console.log("table");
		console.log(this.props.data);
		// this.getHeader = this.getHeader.bind(this);
		// this.getRowsData = this.getRowsData.bind(this);
		// this.getKeys = this.getKeys.bind(this);
		this.state={

		}
	}

	getLastRow() {
		return this.props.data.map((date)=>{
			return <th> <input type="checkbox"/></th>
		})
	}

 	getHeader() {
		return this.props.data.map((date)=>{
			return <th key={date}>{date.toUpperCase().slice(0,10)}</th>
	 	})
	 }



	 render() {
	 	return (
	 		<div>
	 			<table>
	 				<thead>
	 					<tr>
	 						<th></th>
	 						{this.getHeader()}
	 					</tr>
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