
// saves the given content to localStorage under 'userData'

const storeContent = (content) => {
	localStorage.setItem('userData', JSON.stringify(content));
};

export default storeContent;
