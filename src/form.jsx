import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import './styles/ListItem.css'
//import { Cloudinary } from '@cloudinary/url-gen';

function Form(){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [inReturn, setInReturn] = useState();
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [picLoading, setPicLoading] = useState([]);
    //const [file, setFile] = useState();
    let navigate = useNavigate()


      const uploadImage = async(pics) =>  {
        const uploadedImages = [];
        pics.forEach((pic) => {
        try{
            if (pic && (pic.type === "image/jpeg" || pic.type === "image/png")) {
              const data = new FormData();
              data.append("file", pic);
              data.append("upload_preset", "swapp12");
              data.append("cloud_name", "dyzpvofax");
              data.append("api_name", "xEvb_eQCrNfNaNm1jrNFx9_kCV0");
              data.append("api_key", "339782487957988");
               fetch("https://api.cloudinary.com/v1_1/dyzpvofax/image/upload", {
                method: "post",
                body: data,
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.secure_url) {
                    uploadedImages.push(data.secure_url);
                    console.log(uploadedImages);
                    
                  } else {
                    console.error("Upload failed:", data);
                  }
                })
                .catch((err) => {
                  console.log(err);

                });
            } else {
              return;
            }
        }catch(error){
        throw new Error(error)
        }
      
          })
          return uploadedImages
        }
        

      const submitHandler = async () => {
        setLoading(true);
        if (!title || !description || !inReturn || !whatsapp ) {
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
              { title, description, inReturn, whatsapp},
              config
            );

          

            console.log(data)

            const uploadedImages = await uploadImage(images);

           // const formData = new FormData();
            //images.forEach(image => {
              //formData.append('image', image);
            //});


            const config2 = {
              headers: {
                "Content-type": "application/json",
              },
            };
          
            const { data2 } = await axios.put(
              `https://swapp-backend-6859b4c055db.herokuapp.com/api/product/:${data._id}`,
              {uploadedImages},
              config2
            );
            console.log(data2);
            
            navigate('/')
          } catch (error) {
            console.error("Error uploading product:", error);
            alert("An error occurred while uploading the product. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = async (e) => {
      setPicLoading(true);
      const filesArray = Array.from(e.target.files);
      const uploadedImages = await uploadImage(filesArray);
      console.log(filesArray.length);
      setImages(uploadedImages);
      setPicLoading(false);
    };
    return(
        <div className="form">
            <label>Title:</label><br/>
            <input className="type" onChange={ (e) => setTitle(e.target.value)} /><br/>
            <label>Description:</label><br/>
            <textarea onChange={ (e) => setDescription(e.target.value)} />
            <br/>
            <br/><label>Exhange:</label><br/>
            <input placeholder="What do you want in return" className="type" onChange={ (e) => setInReturn(e.target.value)} />
            <h2>Add Images:</h2>
            <input type="file" multiple onChange={handleImageChange} />
        {picLoading && <p>Loading...</p>}
    
         
            <label>Whatsapp contact:</label><br/>
            <input type="number" className="type" placeholder="+234" onChange={ (e) => setWhatsapp(e.target.value)} /><br/>
            <button className="listBtn list" onClick={submitHandler} disabled ={loading} >List Item</button>
            
        </div>
    )
}
export default Form