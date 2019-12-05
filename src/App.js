import React, { Component } from 'react';

const toDo = [
	"utiliser le state pour mettre un jour les propriétés d'un composant",
	'on verra pour la suites'
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { toDo: toDo };
	}

	render() {
		return this.state.toDo.map((todo) => <h2>{todo}</h2>);
	}
}

export default App;
