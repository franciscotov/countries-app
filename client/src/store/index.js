import { createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import rootReducer from '../reducer/reducer';

// export const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk),
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, applyMiddleware(thunk))


export default store;