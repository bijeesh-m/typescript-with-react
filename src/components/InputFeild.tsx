import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div className=" flex justify-center">
      <form
        className="flex w-full  sm:w-2/3 py-2 px-1 gap-3 relative items-center"
        onSubmit={(e) => handleAdd(e)}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter the task"
          className=" shadow-md w-full h-12 border rounded-full border-black focus:outline-none focus:border-2 focus:border-blue-500 px-5 input  "
        />
        <button className=" absolute right-2 bg-blue-500 p-2 text-sm rounded-full w-10 h-10  font-bold">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputFeild;
