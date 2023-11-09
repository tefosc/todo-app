import { useState } from "react";
import EditTextTodo from "./EditTextTodo";

function EditTodo({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <button
        className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
        onClick={openModal}
      >
        Editar
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="w-72 h-72 bg-black p-4 rounded-md flex flex-col items-center">
            <h1 className="uppercase text-2xl text-white mb-4">
              Ventana de edición
            </h1>
            <EditTextTodo item={item} />
            <button
              onClick={closeModal}
              className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded uppercase"
            >
              Guardar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default EditTodo;
