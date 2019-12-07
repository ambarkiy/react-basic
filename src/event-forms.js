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

class EventForms extends Component {
	constructor(props) {
		super(props);
		this.OnSearchChange = this.OnSearchChange.bind(this);
		this.state = { toDo, searchTerm: '' };
	}
	render() {
		return (
			<div>
				<form>
					<input type='text' onChange={this.OnSearchChange} />
					<div>
						{this.state.toDo
							.filter((item) => item.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
							.map((item) => {
								return (
									<div key={item.id}>
										<h4>{item.title}</h4>
										<span>{item.description}</span>
									</div>
								);
							})}
					</div>
				</form>
			</div>
		);
	}

	OnSearchChange(event) {
		//modification partielle de l'etat pas besoin de redonner la liste
		this.setState({ searchTerm: event.target.value });
	}
}
export default EventForms;
