import React from 'react';
import CardList from './list';

export default class Board extends React.Component {	
	render() {
		let lists = [];
		let listTitlesAsArray = this.props.lists.split(' ');

		console.log(typeof listTitles);
		for (let i = 0; i < 3; i++) {
			lists.push(<CardList title = {listTitlesAsArray[i]} />);
		}
		return (
			<div className="board">
				<p className="board-title">{this.props.boardTitle}</p>
				{lists}
			</div>
		);
	}
}	