import { useState } from "react";
import TodoList from "./TodoList";
import Prueba from "./prueba";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <h1 className="text-4xl mb-3 font-extrabold">App de TODOS</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="font-bold text-2xl"> Ingresa una nota: </label>
        <input
          type="text"
          placeholder="Ingresa todo"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border border-b-black p-2 rounded-md"
        ></input>
        <label className="ml-4 font-semibold text-2xl">Descripción: </label>
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border border-b-black p-2 rounded-md"
        ></input>
        <button
          onClick={() => {
            if (text === "") return alert("No puedes ingresar una nota vacia");
            setText("");
            setDescription("");
            setTodo([
              ...todo,
              {
                id: todo.length,
                text: text,
                isComplete: false,
                description: description,
              },
            ]);
          }}
          className="border border-black rounded-md ml-4 p-2 mt-4 hover:bg-black hover:text-white"
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
