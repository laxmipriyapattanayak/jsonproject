import React, { useEffect, useState } from "react";

//https://jsonplaceholder.typicode.com/albums?userId=1
//https://jsonplaceholder.typicode.com/users/1/albums

const UserAlbum = ({ id }) => {
  const [userAlbums, setUserAlbums] = useState([]);

  useEffect(() => {
    async function fetchUserAlbum() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
      );
      const albumData = await res.json();
      setUserAlbums(albumData);
      console.log(albumData);
    }
    fetchUserAlbum();
  }, [id]);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 card_frame">
        {userAlbums.map((userAlbum) => (
          <div className="col">
            <div className="card" style={{ width: 18 + "rem" }}>
              <div className="card-body">
                <h5 className="card-title">{userAlbum.title}</h5>
                <a href="#" className="card-link">
                  view photos
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <h2> User {id} Album</h2>
      {userAlbums.map((userAlbum) => (
        <div className="card" style={{ width: 18 + "rem" }}>
          <div className="card-body">
            <h5 className="card-title">{userAlbum.title}</h5>
            <a href="#" className="card-link">
              view photos
            </a>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default UserAlbum;
