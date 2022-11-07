import { PageProps, Todo } from "../../../../typings";

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
    // ,{ cache: "force-cache" }
    // {next: { revalidate: 60}} //SSG/ISR (seconds)
  );
  const todo: Todo = await res.json();
  return todo;
};

async function Head({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);
  return (
    <>
      <title>{todo.title}</title>
    </>
  );
}

export default Head;
