
// saves the given content to localStorage under 'userData'

const storeContent = (content) => {
	console.log('Original content:');
	console.log(content);
	console.log('Stringified content:');
	console.log(JSON.stringify(content));
	localStorage.setItem('userData', JSON.stringify(content));
};

export default storeContent;
