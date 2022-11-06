import React from "react";
import { Todo } from "../../../typings";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

const fetchTodo = async (id: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    { cache: "force-cache" }
    // {next: { revalidate: 60}} //Timed server revalidating (seconds)
  );
  const todo: Todo = await res.json();
  return todo;
};

async function ToDoPage({ params: { id } }: PageProps) {
  const todo = await fetchTodo(id);
  if (!todo.id) return notFound();

  return <div>ToDoPage: {id} </div>;
}

export default ToDoPage;
