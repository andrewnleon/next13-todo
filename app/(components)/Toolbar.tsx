import Link from "next/link";
import React from "react";

function toolbar() {
  return (
    <header className="px-1 py-5 bg-blue-500">
      <Link href="/" className="p-2 m-2 text-black bg-white rounded-lg">Home</Link>
      <Link href="/todos" className="p-2 m-2 text-black bg-white rounded-lg">Todos</Link>
      <Link href="/search" className="p-2 m-2 text-black bg-white rounded-lg">Search</Link>
    </header>
  );
}

export default toolbar;
