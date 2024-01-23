import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostNew } from "./PostNew";

export function Apod() {
  const [photo, setPhoto] = useState({});
  const [posts, setPosts] = useState([]);
  const [userCanPost, setUserCanPost] = useState(false);

  useEffect(() => {
    const fetchPhoto = async () => {
      // console.log("fetch photo ran");
      try {
        const response = await axios.get("http://127.0.0.1:3000/apod.json");
        console.log(response.data);
        setPhoto(response.data); // Set the single photo object
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchPhoto();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/posts/${photo.id}.json`);
        console.log(response.data);
        setUserCanPost(response.data.user_can_post);
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPosts();
  }, [photo]);

  return (
    <div>
      {Object.keys(photo).length > 0 && (
        <>
          <h1>{photo.title}</h1>
          <p>{photo.date}</p>
          <p>{photo.explanation}</p>
          <img src={photo.hdurl} alt={photo.title} />
          <PostsIndex posts={posts} />
          {userCanPost && <PostNew photoId={photo.id} />}
        </>
      )}
      {Object.keys(photo).length === 0 && (
        <img id="servunav" src="src/assets/earth-moon.png" alt="Service Unavailable" />
      )}
    </div>
  );
}
