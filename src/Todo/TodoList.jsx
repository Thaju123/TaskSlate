import { MdCheck, MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
<FaCheckCircle />
     </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
<MdDeleteForever />
      </button>
    </li>
  );
};