import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className=" w-full flex flex-col  gap-y-2  justify-center items-center">
      {todos.map((todo) => {
        return (
          <SingleTodo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
