import { useEffect, useState } from 'react';
import Navbar from "../Navbar";
import Card from "../Card";
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage any error
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const [searchResults, setSearchResults] = useState([]); // State to store the search results

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get('https://swapp-backend-6859b4c055db.herokuapp.com/api/product');
        setData(response.data); // Update state with the fetched data
      } catch (error) {
        setError(error); // Update state with the error
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this runs only once after the initial render

  useEffect(() => {
    // Function to fetch search results
    const fetchSearchResults = async () => {
      try {
        let response;
        if (searchQuery.trim() === '') {
          response = await axios.get('https://swapp-backend-6859b4c055db.herokuapp.com/api/product');
        } else {
          response = await axios.get(`https://swapp-backend-6859b4c055db.herokuapp.com/api/product?search=${searchQuery}`);
          //console.log(searchQuery)
        }
        setSearchResults(response.data); // Update state with the search results or full dataset
      } catch (error) {
        setError(error); // Update state with the error
      }
    };

    fetchSearchResults(); // Call the fetchSearchResults function when searchQuery changes
  }, [searchQuery]);

  if (loading) return <div>Loading...</div>; // Show loading message while data is being fetched
  if (error) return <div>Error: {error.message}</div>; // Show error message if there is an error

  const cards = (searchQuery ? searchResults : data).map((item, index) => (
    <Card
      key={index}
      images={item.images}
      id={item._id}
      {...item}
    />
  ));

  return (
    <div>
      <Navbar searchQuery={searchQuery} handleSearchChange={setSearchQuery} />
      <section className="Cards-list">
        {cards}
      </section>
    </div>
  );
}
