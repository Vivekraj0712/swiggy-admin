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
