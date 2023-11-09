import { useState } from "react";

function CompletTodo({ item }) {
  const [status, setStatus] = useState(false);

  return (
    <a
      href="#"
      onClick={() => {
        setStatus(!status);
      }}
      className={status ? "line-through" : ""}
    >
      {item.text}
      <br />
      <span className="ml-4 text-sm text-red-500 font-bold">
        {item.description}
      </span>
    </a>
  );
}

export default CompletTodo;
