import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer todos={todos} />
    </div>
  );
}
