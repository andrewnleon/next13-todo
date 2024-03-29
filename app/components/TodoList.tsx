import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const todos: Todo[] = await res.json();
  return todos;
};

async function Todolist() {
  const todos = await fetchTodos();
  const trimmedTodo = todos.splice(0, 10);

  return (
    <>
      {trimmedTodo.map((todo) => (
        <div key={todo.id} className="pb-3">
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </div>
      ))}
    </>
  );
}

export default Todolist;
