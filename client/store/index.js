import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const logger = createLogger({ collapsed: true });
const middleware = applyMiddleware(thunkMiddleware, logger);

export default createStore(rootReducer, composeWithDevTools(middleware));
