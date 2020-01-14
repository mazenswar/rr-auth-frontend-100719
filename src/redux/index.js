import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/userReducer';
import characters from './reducers/characterReducer';

const rootReducer = combineReducers({
  currentUser: currentUser,
  characters: characters
});

export default createStore(rootReducer, applyMiddleware(thunk));
