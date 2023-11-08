import { useState } from "react";
import TodoList from "./TodoList";
import Prueba from "./prueba";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  return (
    <>
      <h1 className="text-3xl mb-3">App de TODOS</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Ingresa todo"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border border-b-black p-2 rounded-md"
        ></input>
        <button
          onClick={() => {
            setText("");
            setTodo([
              ...todo,
              {
                id: todo.length,
                text: text,
                isComplete: false,
              },
            ]);
          }}
          className="border border-black rounded-md ml-4 p-2 hover:bg-black hover:text-white"
        >
          Ingresar
        </button>
      </form>
      <TodoList todos={todo} />
      {/* <Prueba todos={todo} /> */}
    </>
  );
}

export default Todo;
