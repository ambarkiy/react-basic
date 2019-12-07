import React, { Component } from 'react';
import ToDoReadOnly from './readonly-component';
import ToDoRemovable from './editable-component';
import EventHandlerDeclaration from './event-handler-declaration';
import EventForms from './event-forms';

class App extends Component {
	render() {
		return (
			<div>
				<ToDoReadOnly />
				<ToDoRemovable />
				<EventHandlerDeclaration />
				<EventForms />
			</div>
		);
	}
}

export default App;
