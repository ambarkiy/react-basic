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
		description: 'interraction entre composant'
	}
];

class ToDoReadOnly extends Component {
	constructor(props) {
		super(props);
		this.state = { toDo: toDo };
		//es6 shortcut the same
		this.state = { toDo };
	}

	render() {
		return this.state.toDo.map((item) => (
			<div key={item.id}>
				<h2>{item.title}</h2>
				<span>{item.description}</span>
			</div>
		));
	}
}

export default ToDoReadOnly;
