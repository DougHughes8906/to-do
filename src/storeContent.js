
import {profileToData} from './convertToData'

// saves the given content to localStorage under 'userData'

const storeContent = (content) => {	
	localStorage.setItem('userData', JSON.stringify(profileToData(content))); 
};

export default storeContent;
