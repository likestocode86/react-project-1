import React from 'react';
import Card from './card';

export default class CardList extends React.Component {	
	constructor(props){
		super(props);
	}

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

			<form method="post" action="http://www.google.com" onSubmit={props.onAddSubmit}>
				<input type="text" onChange={props.onAddInputChanged}/>
				<input type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}