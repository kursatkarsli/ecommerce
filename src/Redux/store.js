
 import  reducer  from './reducer'
import { createStore, applyMiddleware} from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

export const store = createStore(reducer, applyMiddleware(logger));
export const persistor = persistStore(store);

