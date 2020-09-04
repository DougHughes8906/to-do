
const Item = (creationOrder) => {
	let title = 'New item';
	let description = '';
	let dueDate = '';	
	let priority = '';
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

	const isComplete = () => {
		return complete;
	}

	const getOrder = () => {
		return order;
	}

	return {changeTitle, changeDesc, changeDueDate, changePriority, setComplete, 
		setIncomplete, getTitle, getDescription, getDueDate, getPriority, 
		isComplete, getOrder}
};


export default Item
