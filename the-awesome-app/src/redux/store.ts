import {createStore, combineReducers} from 'redux';
import { authreducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';
import {configureStore} from '@reduxjs/toolkit';


const reducers = combineReducers({
    auth: authreducer,
    gadgets: gadgetsReducer
})

//store
// export const store = createStore(reducers,
//         (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export const store = configureStore({
    reducer: reducers
});