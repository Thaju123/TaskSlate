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
        <i className="fa-solid fa-check" style={{fontSize:"20px"}}></i>
      </button>

      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <i className="fa-solid fa-trash"  style={{fontSize:"20px"}}></i>
      </button>
    </li>
  );
};
