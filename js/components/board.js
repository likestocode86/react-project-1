import React from 'react';
import ListContainer from './list-container';

export default class Board extends React.Component {	
	render() {
		let listContainers = [];
		let listTitlesAsArray = this.props.lists.split(' ');

		for (let i = 0; i < 3; i++) {
			listContainers.push(<ListContainer listTitle={listTitlesAsArray[i]} />);
		}

		return (
			<div className="board">
				<p className="board-title">{this.props.boardTitle}</p>
				{listContainers}
			</div>
		);
	}
}	