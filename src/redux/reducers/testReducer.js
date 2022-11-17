const initialState={}


const testReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'FILTER_STANDARD':
            //let mapData=action.payload.wholeData.map((i)=>{return i.Standard})
            let newState={...state,data:action.payload.wholeData}
            console.log({newState})
            return newState;
          default:
            console.log("default")
            return state     
    }
}

export default testReducer;