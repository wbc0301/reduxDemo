import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';    // 引入笔记本

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : 
    compose;

const enhancer = composeEnhancers(   // [ɪnˈhænsə(r)]增强剂
	applyMiddleware(thunk)
);
const store = createStore(reducer, enhancer);

// const store = createStore(
//   reducer, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store; // 导出store


