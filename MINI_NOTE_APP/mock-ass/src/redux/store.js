import { legacy_createStore as createstore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { NoteReducer } from "./reducer";




const rootReducer=combineReducers({
    note:NoteReducer
})

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createstore(rootReducer,composeEnhancers(applyMiddleware(thunk)))


