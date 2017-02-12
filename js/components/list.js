import React from 'react';
import Card from './card';

export default class CardList extends React.Component {	
	render() {
		let listOfCards = [];
		for (let i = 0; i < 3; i++) {
			listOfCards.push(<Card />);
		}
		return (
			<div className="list">
				<p class="list-title">List Title</p>
					{listOfCards}
			</div>
		);
	}
}