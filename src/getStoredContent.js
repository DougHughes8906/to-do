
import {profileFromData} from './convertFromData'

// if there's any saved content, retrieves and saves the content 

const getStoredContent = () => {

	// parse the locally stored data
	let parsedData = JSON.parse(localStorage.getItem('userData')); 	

	// convert to a profile object
	return profileFromData(parsedData);	
};

export default getStoredContent
