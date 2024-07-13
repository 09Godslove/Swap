import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./NavbarOne";
import "./styles/View.css";

function View() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://swapp-backend-6859b4c055db.herokuapp.com/api/product/${id}`);
        setItem(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const handleButtonClick = () => {
    window.location.href = `https://wa.me/234${item.whatsapp}`;
  };

  return (
    <>
      <Navbar />
      {item ? (
        <div className="card swapCards">
          <div className="images vImages">
            {item.images[0].images.map((image, index) => (
              <img key={index} src={image} alt={`Product Image ${index + 1}`} />
            ))}
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p><b>In Exchange for:</b> {item.inReturn}</p>
        </div>
      ) : (
        <p>Item not found</p>
      )}
      <div className="swapBtn">
        <button className="listBtn swap" onClick={handleButtonClick}>Swap Item</button>
      </div>
    </>
  );
}

export default View;
