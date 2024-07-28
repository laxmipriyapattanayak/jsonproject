import React, { useEffect, useState } from "react";
import PostComment from "./PostComment";

//https://jsonplaceholder.typicode.com/posts?userId=1
//https://jsonplaceholder.typicode.com/users/1/posts

const UserPost = ({ id }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function fetchUserPost() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      const postData = await res.json();
      setUserPosts(postData);
      console.log(postData);
    }
    fetchUserPost();
  }, [id]);

  return (
    <>
      {userPosts.map((userPost) => (
        <div className="card user_post">
          <div className="card-header">
            user{id} post {userPost.id}
          </div>
          <div className="card-body">
            <h5 className="card-title">{userPost.title}</h5>
            <p className="card-text">{userPost.body}</p>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapseOne" + userPost.id}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onClick={() => setSelectedPost(userPost.id)}
                >
                  <a href="#" className="btn btn-primary">
                    See comments
                  </a>
                </button>
              </h2>
              <div
                id={"collapseOne" + userPost.id}
                class="accordion-collapse collapse "
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  {selectedPost === userPost.id ? (
                    <PostComment postId={userPost.id} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserPost;
