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

// sns fonction fléchée
// function isSearched(searchTerm) {
// 	return function(item) {
// 		return item.title.toLowerCase().includes(searchTerm.toLowerCase());
// 	};
// }

//avec fonction flechée
const isSearched = (searchTerm) => (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Destructuration extends Component {
	constructor(props) {
		super(props);
		this.state = { toDo, searchTerm: '' };
		this.OnSearchChange = this.OnSearchChange.bind(this);
	}
	render() {
		//destructuration
		const { toDo, searchTerm } = this.state;

		return (
			<div>
				<form>
					<input type='text' onChange={this.OnSearchChange} />
					<div>
						{toDo.filter(isSearched(searchTerm)).map((item) => {
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
		this.setState({ searchTerm: event.target.value });
	}
}
export default Destructuration;
