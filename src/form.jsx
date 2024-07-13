import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './styles/ListItem.css';

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [inReturn, setInReturn] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [picLoading, setPicLoading] = useState(false);
  let navigate = useNavigate();

  const uploadImage = async (pics) => {
    //console.log("Starting image upload...");
    const uploadedImages = await Promise.all(
      pics.map(async (pic) => {
        try {
          if (pic && (pic.type === "image/jpeg" || pic.type === "image/png")) {
            const data = new FormData();
            data.append("file", pic);
            data.append("upload_preset", "swapp12");
            data.append("cloud_name", "dyzpvofax");
            console.log("Uploading image:", pic.name);
            const res = await fetch("https://api.cloudinary.com/v1_1/dyzpvofax/image/upload", {
              method: "post",
              body: data,
            });
            const result = await res.json();
            console.log("Upload result:", result);
            if (result.secure_url) {
              return result.secure_url;
            } else {
              console.error("Upload failed:", result);
              return null;
            }
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error uploading image:", error);
          return null;
        }
      })
    );
    //console.log("Uploaded images:", uploadedImages);
    return uploadedImages.filter((url) => url !== null);
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!title || !description || !inReturn || !whatsapp || images.length === 0) {
      alert("Please fill in all fields and add at least one image.");
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        'https://swapp-backend-6859b4c055db.herokuapp.com/api/product/',
        { title, description, inReturn, whatsapp },
        config
      );

      //console.log("Product created:", data);

      const payload = { images };
      //console.log("PUT request payload:", payload);

      const response = await axios.put(
        `https://swapp-backend-6859b4c055db.herokuapp.com/api/product/${data._id}`,
        payload,
        config
      );

      console.log("Product updated with images:", response.data);

      navigate('/');
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      alert("An error occurred while uploading the product. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = async (e) => {
    setPicLoading(true);
    const filesArray = Array.from(e.target.files);
    const uploadedImages = await uploadImage(filesArray);
    setImages(uploadedImages);
    setPicLoading(false);
  };

  return (
    <div className="form">
      <label>Title:</label><br />
      <input className="type" onChange={(e) => setTitle(e.target.value)} /><br />
      <label>Description:</label><br />
      <textarea onChange={(e) => setDescription(e.target.value)} /><br />
      <label>Exchange:</label><br />
      <input placeholder="What do you want in return" className="type" onChange={(e) => setInReturn(e.target.value)} /><br />
      <h2>Add Images:</h2>
      <input type="file" multiple onChange={handleImageChange} />
      {picLoading && <p>Loading...</p>}<br />
      <label>Whatsapp contact:</label><br />
      <input type="number" className="type" placeholder="+234" onChange={(e) => setWhatsapp(e.target.value)} /><br />
      <button className="listBtn list" onClick={submitHandler} disabled={loading}>List Item</button>
    </div>
  );
}

export default Form;