import React from 'react';
import Card from './card';

export default class CardList extends React.Component {	
	render() {
		let listOfCards = [];
		let allCardData = {};
		allCardData["Asia"] = ['Singapore', 'Malaysia', 'China'];
		allCardData["America"] = ['Peru', 'Chile', 'Argentina'];
		allCardData["Africa"] = ['Ethiopia', 'Rawanda', 'South Africa'];

		let cardDataForList = allCardData[this.props.title];

		for (let z = 0; z < cardDataForList.length; z++) {
			listOfCards.push(<Card text={cardDataForList[z]}/>);
		}

		return (
			<div className="list">
				<p className="list-title">{this.props.title}</p>
					{listOfCards}
			</div>
		);
	}
}