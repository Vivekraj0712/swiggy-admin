const Data = require('../Data.json');
const initialState = { courseData: Data };

const reducer = (state = initialState, action) => {
	// console.log({state});
	switch (action.type) {
		case 'FIND_SUBJECTS': {
			let subjectsFilter = state.courseData.find((item) => item.Standard === Number(action.payload.standard));
			subjectsFilter = subjectsFilter ? subjectsFilter.subjects : [];
			let newState = { ...state, currentSubjects: subjectsFilter, currentStandard: action.payload.standard };
			console.log("newStateeeee",newState)
			return newState;
		}

		case 'FIND_CHAPTERS': {
			let subjectId=action.payload.subjectId
			let currentChapters = state.currentSubjects.find((chap) => chap.id === Number(action.payload.subjectId));
			currentChapters = currentChapters ? currentChapters.Chapters : [];
			let newState = { ...state, currentChapters,subjectId };
			console.log("newCHapterssss",currentChapters);
			return newState;
		}

		case 'EDIT_CHAPTERS':{
          let editedChapters=state.currentChapters.map((item)=>item.id===action.payload.id?{...item,name:action.payload.chapterName}:item)
		  let newState={...state,currentChapters:editedChapters}
		  let subjectArray=newState.currentSubjects.map((item)=>item.id===Number(newState.subjectId)?{...item,Chapters:editedChapters}:item)
		   newState={...newState,currentSubjects:subjectArray}		 
		   //let courseDataArray=newState.courseData.map((item)=>item.Standard===newState.currentStandard?{...}))
		    console.log(newState)
		   return newState
		}

		default:
			console.log('DEFAULT');
			return state;
	}
};

export default reducer;
