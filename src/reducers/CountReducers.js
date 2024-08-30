// reducer function
function countReducer(state,action){
    // console.log(action);
    // if (action.type=="inc1") {
    //     return state+1
    // } else if (action.type=="dec1") {
    //     return state-1
    // } else if (action.type=="inc5") {
    //     return state+5
    // } else if (action.type=="dec5") {
    //     return state-5
    // } else if (action.type=="inc10") {
    //     return state+10
    // } else if (action.type=="dec10") {
    //     return state-10
    // }
    //  else{
    //     return state
    // }

    switch (action.type) {
        case "inc1":
            return state+1
        case "dec1":
            return state-1
    
        case "inc5":
            return state+5
        case "dec5":
            return state-5
        case "inc10":
            return state+10
        case "dec10":
            return state-10
        case "input":
            return state+Math.trunc(action.payload)
        default:
            return state
    }

    
    
}

export default countReducer