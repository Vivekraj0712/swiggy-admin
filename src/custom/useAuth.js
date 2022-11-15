const useAuth = () => {
	const localStorageData = localStorage.getItem('authToken') || '';

	if (localStorageData) {
		return [localStorageData, updateData];
	}
	return [localStorageData, updateData];
};

const updateData = (data) => {
	localStorage.setItem('authToken', data);
};

export default useAuth;

// const [userData,setUserData]=useLocalStorage("authToken",defaultValue)
// if not exist = key => localStorage => defaultValue || ""
// setUserData(vishal) => localStorage => vishal


//
// customhook => key => localStorage,sessionStorage,
// cookies
//

