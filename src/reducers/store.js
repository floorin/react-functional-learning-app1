import currentUser from './username'
import counter from './counter'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    currentUser,
    counter
})

export default rootReducer
