import {createStore,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import singin from './login'
const redncers= combineReducers({singin});
const store=()=>{
    return createStore(redncers,composeWithDevTools());
}

export default store();