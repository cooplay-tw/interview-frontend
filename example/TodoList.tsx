"use client";
import React, { useState } from "react";

const TodoList = () => {
  // 初始 TODO 列表直接以文字陣列呈現（未考慮重複與唯一識別）
  const [todos, setTodos] = useState(["Buy milk", "Walk dog", "Read book"]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {};

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="font-extrabold text-3xl">My TODO List</h1>
      <ul>
        {todos.map((todo, index) => (
          // 使用 index 作為 key，當項目重複或順序變動時可能產生問題
          <li key={index}>{`${index + 1}. ${todo}`}</li>
        ))}
      </ul>
      <div className="flex flex-row gap-2 mt-4">
        <input
          type="text"
          placeholder="New todo"
          className="px-4 border border-gray-300 rounded-md"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoList;
