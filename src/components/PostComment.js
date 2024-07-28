import React, { useEffect, useState } from "react";

//https://jsonplaceholder.typicode.com/posts/1/comments

const PostComment = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPostComment() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const commentData = await res.json();
      setComments(commentData);
      console.log(commentData);
    }
    fetchPostComment();
  }, [postId]);
  return (
    <div>
      {comments.map((comment) => (
        <h2>{comment.id}</h2>
      ))}
    </div>
  );
};

export default PostComment;
