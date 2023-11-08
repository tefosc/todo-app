import CompletTodo from "./CompletTodo";
import EditTodo from "./EditTodo";

function TodoList({ todos }) {
  return (
    <ul className="mt-4">
      {todos.map((item) => (
        <li key={item.id} className="ml-10 list-disc my-2">
          <CompletTodo item={item} />
          <EditTodo />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
