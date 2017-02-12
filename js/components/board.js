import React from 'react';
import CardList from './list';

export default class Board extends React.Component {	
	render() {
		let lists = [];
		for (let i = 0; i < 3; i++) {
			lists.push(<CardList />);
		}
		return (
			<div className="board">
				<p className="board-title">Board Title</p>
				{lists}
			</div>
		);
	}
}

/*
data = [{
	name: 'Americas',
	countries:[{
		name: Brazil
	}]
}];
*/