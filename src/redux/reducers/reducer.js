const Data= require("../Data.json")
//console.log(Data);
const initialState = {courseData:Data};
//const subjectsFilter=Data.filter((item)=>item.Standard===1)
//console.log({subjectsFilter})
// use Object.assign
let chaptersFilter=Data.filter((item)=>item.Standard===2)
console.log(chaptersFilter[0].subjects.filter((item)=>item.id===2)[0].Chapters)
const reducer = (state = initialState, action) => {
	//console.log({ state, action });

	switch (action.type) {		
		case 'FILTER_STANDARDS':
           return state;
		case 'FILTER_SUBJECTS':
            let subjectsFilter=Data.filter((item)=>item.Standard===Number(action.payload.standard))
			let newState={courseData:subjectsFilter}
			console.log({state})			
            return newState;
	     case 'FILTER_CHAPTERS':
			let chaptersFilter=Data.filter((item)=>item.Standard===Number(action.payload.standardId))
			let chapterData=chaptersFilter[0].subjects.filter((item)=>item.id===Number(action.payload.subjectId))[0].Chapters
            let newState1={courseData:chapterData}		
			return newState1; 
		 	
		default:
			console.log('DEFAULT');
			return state;
	}
};

export default reducer;
