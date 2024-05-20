import React from "react";
import { BsPlus } from "react-icons/bs";

const AddTodo = ({ newTodoText, setNewTodoText, handleAddToDoClick }) => {
	return (
		<div className="flex items-center mb-4">
			<input
				type="text"
				name="text"
				value={newTodoText}
				onChange={(e) => {
					setNewTodoText(e.target.value);
				}}
				className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
				id="addTodoInput"
				placeholder="Add Todo"
			/>
			<button
				className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
				onClick={handleAddToDoClick}>
				<BsPlus />
			</button>
		</div>
	);
};

export default AddTodo;
