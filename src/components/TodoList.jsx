import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const TodoList = () => {
	const filteredTodos = useSelector((state) => {
		const todos = state.todos;
		const filter = state.filter;
		const searchTerm = state.searchTerm;

		return todos.filter((todo) => {
			const matchfilter =
				(filter === "COMPLETED" && todo.completed) ||
				(filter === "INCOMPLETE" && !todo.completed) ||
				filter === "ALL";

			const matchSearch = todo.text.toLowerCase().includes(searchTerm);

			return matchfilter && matchSearch;
		});
	});
	console.log("filtered todos: ", filteredTodos);

	return (
		<div>
			<h3 className="p-3">Your todo list is here</h3>
			<ul>
				{filteredTodos.length === 0 ? (
					<li>There's nothing here!</li>
				) : (
					filteredTodos.map((data, index) => (
						<TodoItems key={index} data={data} id={index} />
					))
				)}
			</ul>
		</div>
	);
};

export default TodoList;
