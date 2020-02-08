import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = value => ({
	type: CHANGE_INPUT_VALUE,
	value
})

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
})

export const getDeleteItemAction = index => ({
	type: DELETE_TODO_ITEM,
	index
})

export const getInitListAction = list => ({
	type: INIT_LIST_ACTION,
	list
})

export const getTodoList = () => { // 异步获取list
	return (dispatch) => {
		axios.get('/api/todolist.json')
			.then(res => {
				const action = getInitListAction(res.data);
				dispatch(action);
			})
	}
}












