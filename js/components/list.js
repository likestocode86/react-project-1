import React from 'react';
import Card from './card';

export default class CardList extends React.Component {	
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="list">
				<p className="list-title">{this.props.listTitle}</p>
					{this.props.cards}

			<form method="post" onSubmit={this.props.onAddSubmit}>
				<input type="text" onChange={this.props.onAddInputChanged}/>
				<input type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}