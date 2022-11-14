const initialState = {};

const reducer = (state = initialState, action) => {
	console.log({ state, action });
	switch (action.type) {
		case 'ADD':
			console.log('ADDDD called ', action);
			let newState = { ...state, data: action.payload.newChapterName };
			return newState;
		default:
			console.log('DEFAULT');
			return state;
	}
};

export default reducer;
