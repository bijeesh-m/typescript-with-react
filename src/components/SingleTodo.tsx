import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <div className="  w-full flex  justify-center ">
      <form
        onSubmit={(e) => handleEdit(e, todo.id)}
        className=" w-full sm:w-3/5 p-5 rounded-md flex justify-between items-center bg-green-500 "
      >
        {edit ? (
          <input
            ref={inputRef}
            className=" focus:outline-none px-2"
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            placeholder="skfljaj"
          />
        ) : todo.isDone ? (
          <s className=" w-2/3  break-all  font-bold ">{todo.todo}</s>
        ) : (
          <p className=" w-2/3  break-all  font-bold ">{todo.todo}</p>
        )}
        <div className=" flex gap-6">
          <FiEdit3
            className=" cursor-pointer"
            onClick={() => {
              if (!todo.isDone && !edit) {
                setEdit(!edit);
              }
            }}
          />
          <MdDelete
            className=" cursor-pointer"
            onClick={() => handleDelete(todo.id)}
          />
          <MdOutlineDone
            className=" cursor-pointer"
            onClick={() => handleDone(todo.id)}
          />
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
