

// obejct used to store the profile data in localStorage

const ProfileData = () => {

	let projectDataList = [];
	let projectCheckList = [];
	let homeIndex = -1;
	let selectedIndex = -1;
	let itemIndex = -1;
	let addItemStatus = false;
	let updateItemStatus = false;
	let projTitleStatus = false;

	return {projectDataList, projectCheckList, homeIndex, selectedIndex, 
		itemIndex, addItemStatus, updateItemStatus, projTitleStatus};
};

export default ProfileData
