import React from 'react';
import CardList from './list';
import Card from './card';

export default class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: '',
			cards:[]
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddInputChanged(event) {
		this.setState({
			cards: this.state.cards,
			inputText: event.target.value
		});
	}

	onAddSubmit(event) {
		event.preventDefault();
		//1. card array will have 0 cards
		//.push();
		let cards = this.state.cards;
		cards.push(<Card text={this.state.inputText}/>);
		this.setState({
			cards: cards,
			inputText: this.state.inputText
		});
	}

	render() {
		return <CardList cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} listTitle={this.props.listTitle}/>;
	}
}