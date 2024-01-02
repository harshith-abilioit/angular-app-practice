let initialState:any = {
    name:"",
    email:"",
    number:""
}

export function userReducer(state=initialState,action:any){
    switch(action.type){
        case 'name-edit':
            return {...state,name:action.payload};
        case 'email-edit':
            return {...state,email:action.payload}
        case 'number-edit':
            return {...state,number:action.payload}
        default:
            return state;
    }

}