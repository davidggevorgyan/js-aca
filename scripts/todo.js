const tasks = [];
function NewTask( text ) {
	this.id = tasks.length;
	this.isDone = false;
	this.isDeleted = false;
	this.task = text;
}
let filter = null;

tasks.push( new NewTask( 'The sorting units for plastic building blocks work in the opposite way to Noah\'s bug filter. The top level has the widest gaps in the mesh. At each level of the box the gaps become smaller. When an unsorted collection of blocks is tipped into the top of the box and the box is shaken, the largest blocks stay at the top levels and the smallest blocks fall through to the bottom. When you take the levels apart, you can easily access the different sized blocks' ) );
tasks.push( new NewTask( 'Create a \'quality view\' that people can go to and quickly spot any problems/action items. I understand that quality is a \'complex\' topic usually defined by whatever the company lacks the most right now and as we lack in many area' ) );


function renderTasks( tasksList = tasks ) {
	let tasksListToRender = tasksList;
	const todo = document.querySelector( '.todo' );
	const newList = document.createElement( 'div' );
	newList.setAttribute( 'class', 'tasks' );

	if ( filter ) {
		const isDone = filter === 'completed';
		tasksListToRender = tasksList.filter( ( element ) => element.isDone === isDone );
	}

	for ( let index = tasksListToRender.length - 1; index >= 0; index-- ) {
		if ( !tasksListToRender[index].isDeleted ) {
			const task = document.createElement( 'div' );
			task.setAttribute( 'id', `task-${ tasksListToRender[index].id }` );

			const checkBox = document.createElement( 'input' );
			checkBox.setAttribute( 'type', 'checkbox' );
			checkBox.checked = false;

			const text = document.createElement( 'div' );
			text.setAttribute( 'class', 'text' );
			text.innerHTML = tasksListToRender[index].task;

			const deleteButton = document.createElement( 'input' );
			deleteButton.setAttribute( 'type', 'button' );
			deleteButton.setAttribute( 'class', 'delete' );
			deleteButton.setAttribute( 'value', 'X' );

			task.appendChild( checkBox );
			task.appendChild( text );
			task.appendChild( deleteButton );

			if ( tasksListToRender[index].isDone ) {
				text.setAttribute( 'class', 'text done' );
				checkBox.checked = true;
			}

			newList.appendChild( task );
		}
	}

	todo.replaceChild( newList, document.querySelector( '.tasks' ) );
}

function addTask( text ) {
	tasks.push( new NewTask( text ) );
}

function addTaskClick() {
	const addTaskButton = document.querySelector( '.add-task-button' );
	const addTaskField = document.querySelector( '.add-task-field' );
	function submitTask() {
		if ( addTaskField.value ) {
			addTask( addTaskField.value );
			addTaskField.value = '';
			renderTasks();
		}
	}
	addTaskButton.addEventListener( 'click', () => {
		submitTask();
	} );
	addTaskField.addEventListener( 'keypress', ( e ) => {
		if ( e.key === 'Enter' ) {
			submitTask();
		}
	} );
}

function deleteTask( id ) {
	tasks[id].isDeleted = true;
}

function deleteTaskClick() {
	const todo = document.querySelector( '.todo' );
	todo.addEventListener( 'click', ( e ) => {
		if ( e.target.getAttribute( 'class' ) === 'delete' ) {
			deleteTask( +e.target.parentNode.id.split( '-' ).pop() );
			renderTasks();
		}
	} );
}


function markDone( id, value ) {
	tasks[id].isDone = value;
}

function markDoneClick() {
	const todo = document.querySelector( '.todo' );
	todo.addEventListener( 'click', ( e ) => {
		if ( e.target.checked && e.target.getAttribute( 'type' ) === 'checkbox' ) {
			markDone( +e.target.parentNode.id.split( '-' ).pop(), true );
			renderTasks();
		} else if ( !e.target.checked && e.target.getAttribute( 'type' ) === 'checkbox' ) {
			markDone( +e.target.parentNode.id.split( '-' ).pop(), false );
			renderTasks();
		}
	} );
}

function searchTask() {
	const search = document.querySelector( '.search-field' );
	const filterFunction = function filterFunction( event ) {
		renderTasks(
			tasks.filter(
				( element ) => element.task.toLowerCase().includes( event.target.value.toLowerCase() ),
			),
		);
	};
	search.addEventListener( 'search', filterFunction );
	search.addEventListener( 'keyup', filterFunction );
}

function filterClick() {
	const filters = document.querySelector( '.filters' );

	filters.addEventListener( 'click', ( event ) => {
		document.querySelectorAll( '.filter' ).forEach( ( element ) => {
			element.setAttribute( 'class', 'filter' );
		} );
		event.target.setAttribute( 'class', 'filter active' );
		switch ( event.target.innerText ) {
		case 'Active':
			filter = 'open';
			break;
		case 'Completed':
			filter = 'completed';
			break;
		default:
			filter = null;
		}
		document.querySelector( '.search-field' ).value = '';
		renderTasks();
	} );
}


function main() {
	addTaskClick();
	searchTask();
	markDoneClick();
	deleteTaskClick();
	filterClick();
	renderTasks();
}

main();
