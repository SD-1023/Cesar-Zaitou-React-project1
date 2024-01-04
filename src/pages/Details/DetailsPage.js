import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { IonIcon } from '@ionic/react';
import { star, heart, checkmark } from 'ionicons/icons';
import { useFavourites } from "../../contexts/FavouritesContext";



function LoadDetails() {
  const [topic, setTopic] = useState(null);
  const { id } = useParams();
  const {isFavItem, addToFavItem, removeFromFavItem,favItem}=useFavourites();
  const [isFavTopic,setFavTopic]=useState(isFavItem(id));

  useEffect(()=>{
setFavTopic(isFavItem(id));
  },[favItem])

  const toggleFavItem=()=>{
    if(isFavTopic){
        console.log('remove')
        removeFromFavItem(topic.id);
    }
    else{
        console.log('add')
        addToFavItem(topic);
    }

  }

  const detailsApi = `https://tap-web-1.herokuapp.com/topics/details/${id}`;

  useEffect(() => {
    let isMounted = true;

    fetch(detailsApi)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setTopic(data);
          console.log(data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));

    return () => {
      // Cleanup function to log when the component unmounts
      isMounted = false;
    };
  }, [detailsApi]);

  if (!topic) {
    // You may want to render a loading state or redirect the user
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="details-container">
        <div className="details-description">
          <div className="details-title">
            <p className="text-length">{topic.category}</p>
            <h3 className="text-length">{topic.topic}</h3>
            <div className="rating">
              {Array.from({ length: topic.rating }).map((_, index) => (
                <IonIcon key={index} icon={star} />
              ))}
            </div>
            <div className="description">
              {topic.description}
            </div>
          </div>
        </div>

        <div className="author-card">
          <img src={require(`../../logos/${topic.image}`)} alt={topic.topic} />
          <p className="author-name text-length">
            <strong>{topic.topic}</strong> by <NavLink to="#">{topic.name}</NavLink>
          </p>
          <div className="add-favourites border">
            <p>Interested about this topic?</p>
            <button onClick={toggleFavItem}>{isFavTopic?'Remove from Favoutites':'Add to Favourites '}<IonIcon icon={heart} />
            </button>
            <p className="credits">Unlimited credits</p>
          </div>
        </div>
      </div>

      <div className="topics">
        <div className="topics-container">
          <h2 className="text-length">Checklist</h2>
          <ul className="checklist-topics">
            {topic.subtopics.map((subtopic, index) => (
              <li key={index}>
                <span><IonIcon icon={checkmark} /></span> {subtopic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default LoadDetails;
