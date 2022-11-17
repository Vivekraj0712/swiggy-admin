export const add_chapter = (newChapterName) => {
	return {
		type: 'ADD',
		payload: {
			newChapterName,
		},
	};
};

export const filter_standards = (wholeData) => {
	return {
		type: 'FILTER_STANDARDS',
		payload: {
			wholeData,
		},
	};
};

export const filter_subjects = (standard) => {
	return {
		type: 'FIND_SUBJECTS',
		payload: {
			standard,
		},
	};
};

export const filter_chapters = (subjectId) => {
	return {
		type: 'FIND_CHAPTERS',
		payload: {
			subjectId,
		},
	};
};
