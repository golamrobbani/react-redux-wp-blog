import {combineReducers} from 'redux'

import counterReducer from '../features/counter/counter-reducer'



const reducer = (state = { name: 'golam' }, actions) => {
    return state;
}

const rootReducers=combineReducers({
    basicReducer:reducer,
    counterReducer:counterReducer

})

export default rootReducers