import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {carsReducer} from './reducers/carsReducers'
const composeEnhancers = composeWithDevTools({

});

const rootReducer = combineReducers({
    carsReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
export default store;