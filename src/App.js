import React, { Component } from 'react';
import ToDoReadOnly from './readonly-component';
import ToDoRemovable from './editable-component';
import EventHandlerDeclaration from './event-handler-declaration';
import EventForms from './event-forms';
import HigherOrderFunction from './higher-order-function';
import Destructuration from './destructuration';
import UncontrolledToControlled from './uncontrolled';
class App extends Component {
	render() {
		return (
			<div>
				<ToDoReadOnly />
				<ToDoRemovable />
				<EventHandlerDeclaration />
				<EventForms />
				<HigherOrderFunction />
				<Destructuration />
				<UncontrolledToControlled />
			</div>
		);
	}
}

export default App;
