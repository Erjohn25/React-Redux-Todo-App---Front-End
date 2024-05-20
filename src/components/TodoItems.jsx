import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
	markCompleted,
	markIncomplete,
	remove,
	toggle,
} from "../redux/actions";
import Todo from "./Todo";

const TodoItems = ({ data, id }) => {
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(toggle(id));
	};

	const handleCompleted = () => {
		dispatch(markCompleted(id));
	};

	const handleIncomplete = () => {
		dispatch(markIncomplete(id));
	};

	const handleRemove = () => {
		dispatch(remove(id));
	};
	return (
		<li className="flex justify-between border-b-slate-950 p-3">
			<div>
				<span>{id + 1}. </span>
				<span className={`${data.completed && "line-through text-red-600"}`}>
					{data.text}
				</span>
			</div>
			<div className="space-x-3">
				<button
					onClick={handleToggle}
					className="text-white bg-blue-500 ms:px-2 text-sm p-1 rounded">
					{data.completed ? <FaToggleOff /> : <FaToggleOn />}
				</button>

				{!data.completed ? (
					<button
						onClick={handleCompleted}
						className="text-white bg-blue-500 ms:px-2 text-sm p-1 rounded">
						<FaCheck />
					</button>
				) : (
					<button
						onClick={handleIncomplete}
						className="text-white bg-blue-500 ms:px-2 text-sm p-1 rounded">
						<FaTimes />
					</button>
				)}
				<button
					onClick={handleRemove}
					className="text-white bg-red-500 ms:px-2 text-sm p-1 rounded">
					<FaTrash />
				</button>
			</div>
		</li>
	);
};

export default TodoItems;
