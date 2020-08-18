
const Item = (creationOrder) => {
	let title = 'New item';
	let description = '';
	let dueDate = '';	
	let priority = 1;
	let complete = false;
	// for use by a project object to track the order in which this
	// item was created among all items in the project
	let order = creationOrder;

	// minimum and maximum priorities for any item
	const minPriority = 1;
	const maxPriority = 10;

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
		if (typeof newPriority === 'number') {
			let remainder = newPriority % 1;
			if (remainder === 0) {
				if (newPriority < minPriority) {
					console.log(`Entered priority of ${newPriority} is below the minimum priority of ${minPriority}`);
					newPriority = minPriority;
				}
				else if (newPriority > maxPriority) {
					console.log(`Entered priority of ${newPriority} is above the maximum priority of ${maxPriority}`);
					newPriority = maxPriority;
				}
				priority = newPriority;	
				console.log(`Priority for the ${title} task changed to ${priority}.`);
			}
			// input is NaN, infinity or -infinity
			else if (isNaN(remainder)) {
				console.log(`NaN, Infinity or -Infinity was entered. Priority for the ${title} task unchanged.`);
			}
			else {
				console.log(`A floating number was not entered. Priority for the ${title} task unchanged.`);	
			}
		}
		// input is not a number
		else {
			console.log(`A number was not entered. Priority for the ${title} task unchanged.`);
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
