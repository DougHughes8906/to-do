import completeMsg from './completeMsg';

function completeElem(taskName) {

	let element = document.createElement('div');

	element.innerHTML = completeMsg(taskName);

	return element;
}

document.body.appendChild(completeElem('Test'));
