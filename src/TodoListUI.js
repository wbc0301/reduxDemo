import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

// 当一个组件只有一个render函数时，就是一个无状态组件。
// 无状态组件性能比较高，因为没有生命周期函数。
// 
const TodoListUI = (props) => {
	return (
		<div>
			<Input
				value={props.inputValue}
				placeholder="请输入内容"
				style={{ width: '300px', marginTop: '10px', marginLeft: '10px', marginRight: '10px' }}
				onChange={props.handleInputChange}
			/>
			<Button type="primary" onClick={props.handleBtnClick}>添加</Button>
			<div>
				<List
					style={{ marginLeft: '10px', marginTop: '10px', width: '300px' }}
					bordered
					dataSource={props.list}
					renderItem={(item, index) => (<List.Item onClick={props.handleItemClick.bind(this, index)} >{item}</List.Item>)}
				/>
			</div>
		</div>
	)
}

export default TodoListUI;