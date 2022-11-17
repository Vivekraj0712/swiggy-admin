const initialState={}


const subjectReducer=(state=initialState,action)=>{
    let newState=state;
    switch(action.type){
        case 'FILTER_SUBJECTS':
           newState={...state,data:action.payload.id}
           console.log({newState})
           return newState;
         case 'DUMMY':            
            newState={...state,data:action.payload.dummydata}  
            return newState
        default:
            console.log("default")
            return state     
    }
}

export default subjectReducer;