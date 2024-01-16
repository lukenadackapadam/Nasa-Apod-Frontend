import axios from "axios";
import { useState } from "react";

export function PostNew() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/post.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/apod"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>New Post</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <textarea name="post" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
