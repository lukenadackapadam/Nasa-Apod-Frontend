import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

PostsIndex.propTypes = {
  photoId: PropTypes.number,
};

export function PostsIndex({ photoId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log(photoId);
      try {
        const response = await axios.get(`http://127.0.0.1:3000/posts/${photoId}.json`);
        console.log(response.data);
        setPosts(response.data); // Set the single photo object
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.post}</p>
          </div>
        ))}
      {/* <h1>Hi</h1> */}
    </>
  );
}
