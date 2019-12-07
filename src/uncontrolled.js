import React, { Component } from 'react';

const refToUserInput = React.createRef();

class UncontrolledToControlled extends Component {
	constructor(props) {
		super(props);
		this.state = { userInputInState: '', userInputInHtml: '' };
		//Moyen d'accéder à une référence de l'élément html
	}
	render() {
		const { userInputInState, userInputInHtml } = this.state;

		return (
			<div>
				<input
					type='text'
					id='userIput'
					value={userInputInState}
					onChange={this.OnUserIputChange}
					ref={refToUserInput}
				/>
				<pre>{userInputInState}</pre>
				<pre>{userInputInHtml}</pre>
			</div>
		);
	}

	OnUserIputChange = (e) => {
		this.setState({ userInputInState: e.target.value });
		this.setState({ userInputInHtml: refToUserInput.current.value });
	};
}

export default UncontrolledToControlled;
