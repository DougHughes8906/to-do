import completeMsg from './completeMsg';
import setupPage from './pageFrame';

function completeElem(taskName) {

	let element = document.createElement('div');

	element.innerHTML = completeMsg(taskName);

	return element;
}

// set up the outer frame for the page
setupPage();
