
import Item from './item'

const Project = () => {

	let itemList = [];

	// set to true once all tasks have been completed. If there
	// are no tasks then this is set to true
	let complete = false;

	// tracks the number of completed items
	let numComplete = 0;

	let projectTitle = 'New Project';

	// used to track the order of creation for items
	let createCount = 0;

	// tracks how the project items are currently sorted
	let sortType = 'creationOrder';
	// holds false if "largest" come first
	let sortDirection = false;
	
	const addItem = () => {	
		itemList.push(Item(createCount));
		createCount++;
	};

	// used for adding existing items from localStorage
	const addExistingItem = (item) => {
		itemList.push(item);
	};

	// this method should only be used on completed items (otherwise
	// the numComplete count will be inaccurate)
	const removeItem = (itemIndex) => {
		if (itemIndex < 0 || itemIndex >= itemList.length) {
			console.log(`Index ${itemIndex} is not a valid index of the item list`);
		}
		else {
			itemList.splice(itemIndex, 1);
			numComplete--;
		}
	};

	const completeItem = (itemIndex) => {
		if (itemIndex < 0 || itemIndex >= itemList.length) {
			console.log(`Index ${itemIndex} is not a valid index of the item list`);
		}
		else {
			// check to see if it was already completed
			if (!itemList[itemIndex].isComplete()) {
				itemList[itemIndex].setComplete();
				numComplete++;
			
				// check to see if all items have been completed
				if (numComplete === itemList.length) {
					complete = true;
				}
			}		
		}
	}

	const incompleteItem = (itemIndex) => {
		if (itemIndex < 0 || itemIndex >= itemList.length) {
			console.log(`Index ${itemIndex} is not a valid index of the item list`);
		}
		else {
			// check to see if it is already set to incomplete
			if (itemList[itemIndex].isComplete()) {
				itemList[itemIndex].setIncomplete();
				numComplete--;
			
				// check to see if project was previously set to complete
				if (complete) {
					complete = false;
				}
			}		
		}
	}

	// checks to see if all of the items in the project have been 
	// completed
	const isComplete = () => {
		return complete;
	}

	// if reverse is set to true, then the default sorting is reversed
	const sortBy = (sortT, reverse) => {
		if (sortT === 'title') {
			itemList.sort(function(x, y) {
				let xTit = x.getTitle();
				let yTit = y.getTitle();
	
				if (xTit < yTit) {
					return -1;
				}
				if (xTit > yTit) {
					return 1;
				}
				return 0;
			});
		}
		
		else if (sortT === 'due date') {
			itemList.sort(function(x, y) {
				let xDD = x.getDueDate();
				let yDD = y.getDueDate();

				if (xDD < yDD) {
					return -1;
				}
				if (xDD > yDD) {
					return 1;
				}
				return 0;
			});
		}

		else if (sortT === 'priority') {
			itemList.sort(function(x, y) {
				let xPrio = x.getPriorityVal();
				let yPrio = y.getPriorityVal();	
			
				if (reverse) {
					xPrio = xPrio * -1;
					yPrio = yPrio * -1;
				}

				if (xPrio < yPrio) {
					return 1;
				}
				if (xPrio > yPrio) {
					return -1;
				}
				return 0;
			});
		}

		// by default, sort by the order items were added
		else {
			itemList.sort(function(x, y) {
				let xOrder = x.getOrder();
				let yOrder = y.getOrder();

				if (xOrder < yOrder) {
					return -1;
				}
				if (xOrder > yOrder) {
					return 1;
				}
				return 0;
			});
		}

		sortType = sortT;
		sortDirection = reverse;	
	};

	const filterByComplete = () => {
		return itemList.filter(item => item.isComplete());
	};

	const filterByIncomplete = () => {
		return itemList.filter(item => !(item.isComplete()));
	};	

	const getTitle = () => {
		return projectTitle;
	};

	const changeTitle = (newTitle) => {
		projectTitle = newTitle;
	};

	const getItem = (index) => {
		if (index < 0 || index >= itemList.length) {
			console.log(`Index ${index} is not a valid index of the item list`);
		}
		else {
			return itemList[index];
		}
	};

	const getNumItems = () => {
		return itemList.length;
	};

	const isSorted = (sortT, sortD) => {
		return (sortType === sortT && sortDirection === sortD);
	}

	const removeAllComplete = () => {
		itemList = itemList.filter(item => !(item.isComplete()));

		numComplete = 0;
	}

	const hasComplete = () => {
		return (numComplete > 0); 
	}

	const getNumComplete = () => {
		return numComplete;
	}

	const getCreateCount = () => {
		return createCount;
	}

	const getSortType = () => {
		return sortType;
	}

	const getSortDirection = () => {
		return sortDirection;
	}

	// functions for setting data from localStorage
	const setComplete = (completeVal) => {
		complete = completeVal;
	}

	const setNumComplete = (numComp) => {
		numComplete = numComp;
	}

	const setCreateCount = (ccount) => {
		createCount = ccount;
	}

	const setSortType = (type) => {
		sortType = type;
	}

	const setSortDirection = (direction) => {
		sortDirection = direction;
	}
	
	return {addItem, addExistingItem, removeItem, completeItem, incompleteItem, 
		isComplete, sortBy, filterByComplete, filterByIncomplete, getTitle,
		changeTitle, getItem, getNumItems, isSorted, removeAllComplete,
		hasComplete, getNumComplete, getCreateCount, getSortType,
		getSortDirection, setComplete, setNumComplete, setCreateCount,
		setSortType, setSortDirection};
};

export default Project
