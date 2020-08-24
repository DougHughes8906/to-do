// if there's any saved content, retrieves and saves the content 

const getStoredContent = () => {

	// return the parsed data, which will be null if there's nothing saved 
	// and will be a Profile object otherwise
	return JSON.parse(localStorage.getItem('userData'));	
};

export default getStoredContent
