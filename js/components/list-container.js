export defualt class ListContainer extends React.Component {
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
		this.state.event;
	}

	onAddSubmit(event) {
		this.state.event;
	}

	render() {
		return (<CardList cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit}/>);
	}
}