import { useState } from "react";

useState;
function EditTextTodo({ item }) {
  const [newText, setNewText] = useState(item.text);
  const [newDescription, setNewDescription] = useState(item.description);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="font-semibold text-xl text-white">Nota: </label>
        <input
          type="text"
          name="name"
          value={newText}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        />
        <label className="font-semibold text-xl text-white">Descripción</label>
        <input
          type="text"
          name="name"
          value={newDescription}
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default EditTextTodo;
