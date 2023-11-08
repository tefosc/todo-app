import { useState } from "react";
function CompletTodo({ item }) {
  const [status, setStatus] = useState(false);
  return (
    <>
      <a
        href="#"
        onClick={() => {
          setStatus(!status);
        }}
        className={status ? "line-through" : ""}
      >
        {item.text}
      </a>
    </>
  );
}

export default CompletTodo;
