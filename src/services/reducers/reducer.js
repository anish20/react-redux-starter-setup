const initialState={
    crudData:[]
}

export default function crudOperation(state=[],action){
    switch(action.type){
        case "CREATE_DATA":
            console.log("Reducer:",action)
            return[
                ...state,
                {crudData:action.data}
            ]
            break;
            case "LIST_DATE":
            return[
                ...state,
                {crudData:action.data}
            ]
            break;
            default:
                return state
    }
}