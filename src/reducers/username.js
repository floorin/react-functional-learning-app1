const currentUser = (state = {lastName:'Codreanu',firstName:'Florin'}, action) => {
    switch(action.type){
        case "SET_LAST_NAME":
            return {
                lastName:action.payload
                ,firstName:state.firstName
            }
        case "SET_FIRST_NAME":
            return {
                lastName:state.lastName
                ,firstName: action.payload
            }
        default:
            return state
    }
}

export default currentUser;
