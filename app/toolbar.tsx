import Link from "next/link";
import React from "react";

function toolbar() {
  return (
    <header className="p-5 bg-blue-500">
      <Link href="/">Home</Link>
      <Link href="/todos">Todos</Link>
    </header>
  );
}

export default toolbar;
