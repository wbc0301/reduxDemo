import React from 'react'; //1  为了解析render函数中的jsx语法
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// PWA progressive web application  第一次打开时可以在用户端缓存，断网依然可用
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

  <TodoList />, document.getElementById('root')

);
// registerServiceWorker();
