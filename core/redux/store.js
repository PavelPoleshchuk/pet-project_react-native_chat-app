import { createStore, combineReducers} from 'redux';
import userReducer from './reducers';

const rootReducer = combineReducers({ userReducer });

export const Store = createStore(rootReducer);


