// 笔记本
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';

const defaultState = {
	inputValue: '123',
	list: [1, 2]
};

// reducer 就是一个函数
export default (state = defaultState, action) => {  // 导出笔记本

	if (action.type === CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}

	if (action.type === ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}

	if (action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}

	if (action.type === INIT_LIST_ACTION) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.list;
		return newState;
	}

	return state;
}