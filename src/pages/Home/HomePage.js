import React, { useState, useEffect } from 'react';
import TopicsList from './TopicsList';
import SearchBar from './SearchBar';
import Container from '../../Layout/Container';
import { TopicCard } from '../../components/TopicCard';

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uiTopics, setUiTopics] = useState(null);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const [categories, setCategories] = useState(null);





  const listApi = 'https://tap-web-1.herokuapp.com/topics/list';

  const fetchTopics = (search = '') => {
    setLoading(true);
    fetch(`${listApi}?phrase=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopics(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = (searchValue) => {
    setSearch(searchValue);

  }

 
  useEffect(() => {
    const debouncedFetch = setTimeout(() => {
      fetchTopics(search);
    }, 200); // Adjust the debounce delay as needed
  
    return () => clearTimeout(debouncedFetch); // Cleanup on component unmount
  }, [search]);

  useEffect(()=>{
    if(loading){
      setCategories([]);
    }
    else if(topics){

      let cat = new Set(topics.map(topic => topic.category));
      setCategories([...cat]);
    }
  },[loading])

  useEffect(() => {
    if (topics) {
      setUiTopics(
        topics.filter((topic) => {
          if (filterBy) {
            return topic.category === filterBy;
          }
          return true;

        })
          .sort((a, b) => {
            switch (sortBy) {
              case 'author':
                return a['name'] > b['name'] ? 1 : -1;


              case 'topic':
                return a['topic'] > b['topic'] ? 1 : -1;

              default:
                return 0;
            }
          })
      )

    }
  }, [ topics,sortBy, filterBy])

  return (
    <Container>
      <main>
        <div>
          <SearchBar
            onSearch={handleSearch}
            searchVal={search}
            sortVal={sortBy}
            filterOptions={categories}
            onSort={setSortBy}
            filterVal={filterBy}
            onFilter={setFilterBy}


          />
        </div>

        <TopicsList >
          {loading ? <div>Loading....</div> : (
            uiTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                id={topic.id}
                title={topic.topic}
                category={topic.category}
                image={topic.image}
                author={topic.name}
                rating={topic.rating}
              />
            ))
          )}
        </TopicsList>

      </main>
    </Container>
  );
};

export default Home;
