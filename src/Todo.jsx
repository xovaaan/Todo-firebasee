import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
  date: `ml-2 text-gray-500`,
  datePicker: `border p-2 w-full text-xl mt-2`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const formattedDate = todo.date ? new Date(todo.date).toLocaleDateString() : '';

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type='checkbox'
          checked={todo.completed ? 'checked' : ''}
        />
        <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>
          {todo.text}
          {formattedDate && <span className={style.date}>{formattedDate}</span>}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
