
import {profileToData} from './convertToData'

// saves the given content to localStorage under 'userData'

const storeContent = (content) => {
	console.log('Original content:');
	console.log(content);
	console.log('Converted content:');
	console.log(profileToData(content));
	console.log('Stringified content:');
	console.log(JSON.stringify(profileToData(content)));
	localStorage.setItem('userData', JSON.stringify(profileToData(content))); 
};

export default storeContent;
