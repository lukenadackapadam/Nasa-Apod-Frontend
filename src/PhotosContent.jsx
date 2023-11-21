import axios from "axios";
import { useState, useEffect } from "react";

export function PhotosContent() {
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const fetchPhoto = async () => {
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

  return (
    <div>
      <h1>{photo.title}</h1>
      <p>{photo.date}</p>
      <p>{photo.explanation}</p>
      <img src={photo.hdurl} alt={photo.title} />
    </div>
  );
}
