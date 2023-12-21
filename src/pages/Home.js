import React, { useState, useEffect } from 'react';
import LoadTopics from '../controller/LoadTopics';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [topics, setTopics] = useState([]);
  const listApi = 'https://tap-web-1.herokuapp.com/topics/list';

  const fetchTopics = (searchTerm = '') => {
    fetch(`${listApi}?phrase=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setTopics(data);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (searchTerm) => {
    fetchTopics(searchTerm);
  };

  useEffect(() => {
    // Fetch initial topics (without search term) when the component mounts
    fetchTopics();
  }, []);

  return (
    <main>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      
        {/* Pass the fetched topics as a prop to LoadTopics */}
        <LoadTopics topics={topics} />
      
    </main>
  );
};

export default Home;
