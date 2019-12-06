import React, { Component } from 'react';
import ToDoReadOnly from './readonly-component';
import ToDoRemovable from './editable-component';

class App extends Component {
	render() {
		return (
			<div>
				<ToDoReadOnly />
				<ToDoRemovable />
			</div>
		);
	}
}

export default App;
