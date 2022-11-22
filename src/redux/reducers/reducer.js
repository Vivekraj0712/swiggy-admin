const Data = require('../Data.json');

// const data = window.localStorage.getItem('userData') ? JSON.parse(window.localStorage.getItem('userData')) : {};
// const initialState = { courseData: data };

const initialState = { courseData: Data };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FIND_SUBJECTS': {
			let subjectsFilter = state.courseData.find((item) => item.Standard === Number(action.payload.standard));
			subjectsFilter = subjectsFilter ? subjectsFilter.subjects : [];
			let newState = { ...state, currentSubjects: subjectsFilter, currentStandard: action.payload.standard };
			// window.localStorage.setItem('userData', JSON.stringify(newState));
			return newState;
		}

		case 'FIND_CHAPTERS': {
			let currentChapters = state.currentSubjects.find((chap) => chap.id === Number(action.payload.subjectId));
			currentChapters = currentChapters ? currentChapters.Chapters : [];
			let newState = { ...state, currentChapters };
			// window.localStorage.setItem('userData', JSON.stringify(newState));
			console.log(newState);
			return newState;
		}

		default:
			console.log('DEFAULT');
			return state;
	}
};

export default reducer;
