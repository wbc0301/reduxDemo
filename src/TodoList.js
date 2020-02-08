import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from './store'; // 引入store
import { getTodoList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreactors';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // this.handleItemClick = this.handleItemClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange); // 订阅，只要store有变化就会执行这个函数
    }


	// 使用了 redux-thunk 中间件后，dispatch 时接受的 action 就不仅仅十一个对象了，可以是一个函数（可以理解为：升级了 store.dispatch 方法）
	// redux 在派发这个 action 时，会判断如果是一个函数就会先执行这个函数，同时会传入参数: store.dispatch
	// 这个中间件的作用：把异步函数/复杂业务逻辑的同步函数从生命周期中抽离，利于维护和自动化测试。
    componentDidMount() {
        const action = getTodoList(); // 异步获取list
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleInputChange(e) { // 输入框改变时 派发action
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick() { // 点击按钮时  派发action
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemClick(index) { // 点击列表项  派发action
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    render() {
        return ( 
          <TodoListUI 
            inputValue = { this.state.inputValue }
            list = { this.state.list }
            handleInputChange = { this.handleInputChange }
            handleBtnClick = { this.handleBtnClick }
            handleItemClick = { this.handleItemClick }
            />
        )
    }
}

export default TodoList;