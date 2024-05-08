import React, { useState } from "react";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
    setTodo("");
  };

  return (
    <div className=" p-1 bg-slate-300 h-screen">
      <div className=" w-full bg-purple-400  h-16  flex justify-center items-center">
        <h1 className=" text-2xl font-black">Taskify</h1>
      </div>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
