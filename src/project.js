
import Item from './item'

const Project = () => {

	let itemList = [];
	
	const addItem = () => {	
		itemList.push(Item());
	};

	const removeItem = (itemIndex) => {
		if (itemIndex < 0 || itemIndex >= itemList.length) {
			console.log(`Index ${itemIndex} is not a valid index of the item list`);
		}
		else {
			itemList.splice(itemIndex, 1);
		}
	};

	const sortBy = (sortType) => {
		if (sortType === 'title') {
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
		
		else if (sortType === 'due date') {
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

		else if (sortType === 'priority') {
			itemList.sort(function(x, y) {
				let xPrio = x.getPriority();
				let yPrio = y.getPriority();

				if (xPrio < yPrio) {
					return -1;
				}
				if (xPrio > yPrio) {
					return 1;
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
	};

	const filterByComplete = () => {
		return itemList.filter(item => item.isComplete());
	};

	const filterByIncomplete = () => {
		return itemList.filter(item => !(item.isComplete()));
	};

	const getItemList = () => {
		return itemList;
	};

	return {addItem, removeItem, sortBy, filterByComplete, 
		filterByIncomplete, getItemList};
};

export default Project
