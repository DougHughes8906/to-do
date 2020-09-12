
// object used to store item data in localstorage

const ItemData = () => {
	let title = '';
	let description = '';
	let dueDate = '';	
	let priority = '';
	let priorityVal = 0;
	let complete = false;	
	let order = 0;	

	return {title, description, dueDate, priority, priorityVal, 
		complete, order}
};

export default ItemData
