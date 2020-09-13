
const Item = (creationOrder) => {
	let title = 'New item';
	let description = '';
	let dueDate = '';	
	let priority = '';
	let priorityVal = 0;
	let complete = false;
	// for use by a project object to track the order in which this
	// item was created among all items in the project
	let order = creationOrder;	

	const changeTitle = (newTitle) => {
		title = newTitle;
	};	

	const changeDesc = (newDesc) => {
		description = newDesc;
	};

	const changeDueDate = (newDD) => {
		dueDate = newDD;
	}

	const changePriority = (newPriority) => {
		priority = newPriority;

		// translate the priority to a numeric value
		if (priority === '') {
			priorityVal = 0;
		}	
		else if (priority === 'Low') {
			priorityVal = 1;
		}
		else if (priority === 'Medium') {
			priorityVal = 2;
		}
		else {
			priorityVal = 3;
		}
	}

	const setComplete = () => {
		complete = true;
	}

	const setIncomplete = () => {
		complete = false;
	}

	const getTitle = () => {
		return title;
	}
	
	const getDescription = () => {
		return description;
	}

	const getDueDate = () => {
		return dueDate;
	}

	const getPriority = () => {
		return priority;
	}

	const getPriorityVal = () => {
		return priorityVal;
	}

	const isComplete = () => {
		return complete;
	}

	const getOrder = () => {
		return order;
	}

	const setOrder = (newOrder) => {
		order = newOrder;
	}

	return {changeTitle, changeDesc, changeDueDate, changePriority, setComplete, 
		setIncomplete, getTitle, getDescription, getDueDate, getPriority, 
		getPriorityVal, isComplete, getOrder, setOrder}
};


export default Item
