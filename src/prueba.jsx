import React, { useState } from "react";

function prueba(props) {
  const [completedTodos, setCompletedTodos] = useState([]);

  function toggleTodoComplete(id) {
    setCompletedTodos((prevCompletedTodos) => {
      if (prevCompletedTodos.includes(id)) {
        return prevCompletedTodos.filter((todoId) => todoId !== id);
      } else {
        return [...prevCompletedTodos, id];
      }
    });
  }

  return (
    <>
      <ul className="mt-4">
        {props.todos.map((item) => (
          <li key={item.id} className="ml-10 list-disc my-2">
            <a
              href="#"
              onClick={() => toggleTodoComplete(item.id)}
              className={completedTodos.includes(item.id) ? "line-through" : ""}
            >
              {item.text}
            </a>
            <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">
              Editar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default prueba;
