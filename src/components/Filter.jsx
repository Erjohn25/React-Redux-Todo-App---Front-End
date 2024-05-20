import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markALlCompleted } from "../redux/actions";

const Filter = () => {
	const dispatch = useDispatch();

	const currentFilter = useSelector((state) => state.filter);

	const handleFilter = (filter) => {
		dispatch(filterTodos(filter));
	};

	const handleMarkAllCompleted = () => {
		dispatch(markALlCompleted());
	};

	return (
		<div className="flex space-x-4 items-center">
			<select
				value={currentFilter}
				onChange={(e) => handleFilter(e.target.value)}
				className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500">
				<option value="ALL">Default</option>
				<option value="COMPLETED">COMPELETED</option>
				<option value="INCOMPLETE">INCOMPLETE</option>
			</select>

			<button
				onClick={handleMarkAllCompleted}
				className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
				MARK ALL COMPLETED
			</button>
		</div>
	);
};

export default Filter;
