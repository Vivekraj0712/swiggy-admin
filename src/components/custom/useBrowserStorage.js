export const useLocalStorage=(localkey)=>{
	const localStorageData=localStorage.getItem(localkey) || '';
    const updateLocalData=(data)=>localStorage.setItem(localkey,JSON.stringify(data))
	if(localStorageData){
		return [localStorageData,updateLocalData]
	}
	return [localStorageData,updateLocalData]

}




export const useSessionStorage=(sessionkey)=>{
    const sessionStorageData=sessionStorage.getItem(sessionkey) || '';
    const updateSessionData=(data)=>sessionStorage.setItem(sessionkey,JSON.stringify(data))
    if(sessionStorageData){
        return [sessionStorageData,updateSessionData]
    }
    return [sessionStorageData,updateSessionData]
}




