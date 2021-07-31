import {CREATE_DATA,UPDATE_DATA,DELETE_DATA,LIST_DATA} from '../constants/type'
export const CreateData=(data)=>{
    console.log("Action:",data)
    return{
        type:CREATE_DATA,
        data:data
    }
}

export const UpdateData=(data)=>{
    console.log("Action:",data)
    return{
        type:CREATE_DATA,
        data:data
    }
}

export const DeleteData=(data)=>{
    console.log("Action:",data)
    return{
        type:CREATE_DATA,
        data:data
    }
}

export const ListData=(data)=>{
    console.log("Action:",data)
    return{
        type:CREATE_DATA,
        data:data
    }
}