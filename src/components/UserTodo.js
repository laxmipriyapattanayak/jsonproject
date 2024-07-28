import React, { useEffect, useState } from "react";
//https://jsonplaceholder.typicode.com/users/1/todos
//https://jsonplaceholder.typicode.com/todos?userId=1
const UserTodo = ({ id }) => {
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    async function fetchUserTodo() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/todos`
      );
      const todoData = await res.json();
      setUserTodos(todoData);
      console.log(todoData);
    }
    fetchUserTodo();
  }, [id]);
  return (
    <div>
      <h2>User {id}</h2>
      <ul>
        {userTodos.map((userTodo) => (
          <li key={userTodo.id} className="list">
            <input
              type="checkbox"
              checked={userTodo.completed}
              onChange={() => {}}
            />

            <span
              style={
                userTodo.completed ? { textDecoration: "line-through" } : {}
              }
            >
              {userTodo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserTodo;
