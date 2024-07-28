import React, { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [collapse, setCollapse] = useState({});

  const nevigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      console.log(data);
    }
    fetchUsers();
  }, []);

  const handleClick = (id) => {
    console.log(id);
    nevigate(`/user-details/${id}`);
  };

  const handleCollapse = (id) => {
    setCollapse({ ...collapse, [id]: !collapse[id] });
  };

  return (
    <div className="App">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>userId</th>
            <th>User name</th>
            <th>city</th>
            <th>email id</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <tr onClick={() => handleCollapse(user.id)}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="table_button"
                    onClick={() => handleClick(user.id)}
                  >
                    ➡
                  </button>
                </td>
              </tr>
              {collapse[user.id] && (
                <tr>
                  <td colSpan={5}>Extra tr-td {user.id}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
