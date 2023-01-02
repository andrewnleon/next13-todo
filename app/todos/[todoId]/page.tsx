import React from "react";
import { Todo, PageProps } from "../../../typings";
import { notFound } from "next/navigation";

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
    // ,{ cache: "force-cache" }
    // {next: { revalidate: 60}} //SSG/ISR (seconds)
  );
  const todo: Todo = await res.json();
  return todo;
};

async function ToDoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
  return (
    <div>
      ToDo: {todo.id} {todo.title}
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  const timTodos = todos.splice(0, 10);

  return timTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}

export default ToDoPage;
