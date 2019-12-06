import React, { Component } from 'react';

const toDo = [
	{
		id: 1,
		title: 'update component',
		description: "utiliser le state pour mettre un jour les propriétés d'un composant"
	},
	{
		id: 2,
		title: "raccourci es6 dans l'initialisation",
		description: 'es6 raccourci lorsque le nom de la variable à le même nom que la propriété'
	},
	{
		id: 3,
		title: 'interaction entre composants',
		description: 'interraction entree composant'
	}
];

class ToDoRemovable extends Component {
	constructor(props) {
		super(props);
		this.state = { toDo };
	}

	render() {
		return this.state.toDo.map((item) => (
			<div key={item.id}>
				{item.title}
				<span>{item.description}</span>
				<button onClick={this.Supprimer(item.id)}>Supprimer</button>
			</div>
		));
	}

	Supprimer = (itemId) => {
		const filteredToDo = this.state.toDo.filter((item) => item.id !== itemId);
		this.setState({ toDo: filteredToDo });
	};
}
export default ToDoRemovable;
