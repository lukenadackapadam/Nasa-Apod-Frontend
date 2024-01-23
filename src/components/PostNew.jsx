import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

PostNew.propTypes = {
  photoId: PropTypes.number,
};

export function PostNew({ photoId }) {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    params.append("photo_id", photoId);
    axios
      .post("http://localhost:3000/post.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/apod";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div>
      <h1>New Post</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Post: <textarea name="post" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
