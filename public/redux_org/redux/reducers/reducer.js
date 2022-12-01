const Data = require("../Data.json");
const initialState = { courseData: Data };

const reducer = (state = initialState, action) => {
  // console.log({state});
  switch (action.type) {
    case "FIND_SUBJECTS": {
      let subjectsFilter = state.courseData.find(
        (item) => item.Standard === Number(action.payload.standard)
      );
      console.log("state before edit", subjectsFilter);
      subjectsFilter = subjectsFilter ? subjectsFilter.subjects : [];
      let newState = {
        ...state,
        currentSubjects: subjectsFilter,
        currentStandard: action.payload.standard,
      };

      return newState;
    }

    case "FIND_CHAPTERS": {
      let subjectId = action.payload.subjectId;
      let currentChapters = state.currentSubjects.find(
        (chap) => chap.id === Number(action.payload.subjectId)
      );
      currentChapters = currentChapters ? currentChapters.Chapters : [];
      let newState = { ...state, currentChapters, subjectId };

      return newState;
    }

    case "EDIT_CHAPTERS": {
      let editedChapters = state.currentChapters.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.chapterName }
          : item
      );
      let newState = { ...state, currentChapters: editedChapters };
      let subjectArray = newState.currentSubjects.map((item) =>
        item.id === Number(newState.subjectId)
          ? { ...item, Chapters: editedChapters }
          : item
      );
      newState = { ...newState, currentSubjects: subjectArray };
      let courseDataArray = newState.courseData.map((item) =>
        item.Standard === Number(newState.currentStandard)
          ? {
              Standard: Number(newState.currentStandard),
              subjects: subjectArray,
            }
          : item
      );
      newState = { ...newState, courseData: courseDataArray };

      return newState;
    }

    case "DELETE_CHAPTERS": {
      let filteredChapters = state.currentChapters.filter(
        (item) => item.id !== action.payload.id
      );
      let newState = { ...state, currentChapters: filteredChapters };
      let subjectFilterArray = newState.currentSubjects.map((item) =>
        item.id === Number(newState.subjectId)
          ? { ...item, Chapters: filteredChapters }
          : item
      );
      newState = { ...newState, currentSubjects: subjectFilterArray };
      let courseDataFilterArray = newState.courseData.map((item) =>
        item.Standard === Number(newState.currentStandard)
          ? { ...item, subjects: subjectFilterArray }
          : item
      );
      newState = { ...newState, courseData: courseDataFilterArray };

      return newState;
    }

    case "ADD_CHAPTERS": {
      let id = state.currentChapters.sort((a, b) => a - b);
      if(id.length>0){
      id = id[id.length - 1].id + 1;
      }else{
        id=1;
      }
      let addedChapters = [
        ...state.currentChapters,
        { id: id, name: action.payload.chapterName },
      ];
      let newState = { ...state, currentChapters: addedChapters };
      let subjectAddArray = newState.currentSubjects.map((item) =>
        item.id === Number(newState.subjectId)
          ? { ...item, Chapters: addedChapters }
          : item
      );
      newState = { ...newState, currentSubjects: subjectAddArray };
      let courseDataAddArray = newState.courseData.map((item) =>
        item.Standard === Number(newState.currentStandard)
          ? { ...item, subjects: subjectAddArray }
          : item
      );
      newState = { ...newState, courseData: courseDataAddArray };

      return newState;
    }

    default:
      console.log("DEFAULT");
      return state;
  }
};

export default reducer;
