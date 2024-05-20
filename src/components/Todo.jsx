import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodoList from "./TodoList";

const Todo = () => {
	const dispatch = useDispatch();
	const [newTodoText, setNewTodoText] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const handleAddTodo = (text) => {
		dispatch(addTodo(text));
	};

	const handleAddToDoClick = () => {
		if (newTodoText.trim() !== "") {
			handleAddTodo(newTodoText.trim());
			setNewTodoText("");
		}
	};

	const handleSearchChange = (value) => {
		setSearchTerm(value);
		dispatch(updateSearchTerm(value));
	};

	return (
		<div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
			<Header title="PERSONAL TODO APP" />
			{/* input text and buttons */}
			<AddTodo
				newTodoText={newTodoText}
				setNewTodoText={setNewTodoText}
				handleAddToDoClick={handleAddToDoClick}
			/>

			<div className="lg:flex item-center mb-4 justify-between">
				<Filter />
				<div>
					<input
						type="text"
						name="text"
						value={searchTerm}
						onChange={(e) => {
							handleSearchChange(e.target.value);
						}}
						className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
						id="addTodoInput"
						placeholder="Search"
					/>
					<button
						className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
						onClick={handleAddToDoClick}>
						<BsSearch />
					</button>
				</div>
			</div>

			<TodoList />
		</div>
	);
};

export default Todo;
