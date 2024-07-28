import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserTodo from "./UserTodo";
import UserAlbum from "./UserAlbum";
import UserPost from "./UserPost";

const UserInfo = () => {
  const [userData, setUserData] = useState([]);
  const [active, setActive] = useState("todo");

  const { id } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setUserData(data);
      console.log(data);
    }
    fetchUser();
  }, []);

  return (
    <>
      <h1>{userData.name}</h1>
      <div>
        <address>
          Street : {userData.address?.street}
          <br />
          City : {userData.address?.city}
          <br />
          Zipcode : {userData.address?.zipcode}
          <p>
            phone number : {userData.phone}
            <br />
            Website : {userData.website}
          </p>
        </address>
        <hr />
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={active === "todo" ? "nav-link active" : "nav-link"}
              aria-current="page"
              href="#"
              onClick={() => setActive("todo")}
            >
              ToDo
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active === "album" ? "nav-link active" : "nav-link"}
              href="#"
              onClick={() => setActive("album")}
            >
              Album
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active === "post" ? "nav-link active" : "nav-link"}
              href="#"
              onClick={() => setActive("post")}
            >
              Post
            </a>
          </li>
        </ul>

        {active === "todo" && (
          <>
            <UserTodo id={userData.id} />
          </>
        )}

        {active === "album" && (
          <>
            <UserAlbum id={userData.id} />
          </>
        )}

        {active === "post" && <UserPost id={userData.id} />}
      </div>
    </>
  );
};

export default UserInfo;
