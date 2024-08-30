function todoReducer(state,action){
    switch(action.type){
        case "add":
            let obj={
                task:action.payload,
                id:Math.trunc(Math.random()*100000)
            }
            return [...state,obj]
        
        case "delete":
            return state.filter(ele=>ele.id !== action.payload)

        case "edit":
            return state.map(ele=>{
                if(ele.id===action.payload.editId){
                    ele.task = action.payload.task
                }
                return ele
            })
            default:
                return state
    }
}

export default todoReducer