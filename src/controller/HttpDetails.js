import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { IonIcon } from '@ionic/react';
import { star, heart, checkmark } from 'ionicons/icons';



function LoadDetails() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  const detailsApi = `https://tap-web-1.herokuapp.com/topics/details/${id}`;

  useEffect(() => {
    let isMounted = true;

    fetch(detailsApi)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setDetail(data);
          console.log(data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));

    return () => {
      // Cleanup function to log when the component unmounts
      isMounted = false;
    };
  }, [detailsApi]);

  if (!detail) {
    // You may want to render a loading state or redirect the user
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="details-container">
        <div className="details-description">
          <div className="details-title">
            <p className="text-length">{detail.category}</p>
            <h3 className="text-length">{detail.topic}</h3>
            <div className="rating">
              {Array.from({ length: detail.rating }).map((_, index) => (
                <IonIcon key={index} icon={star} />
              ))}
            </div>
            <div className="description">
              {detail.description}
            </div>
          </div>
        </div>

        <div className="author-card">
          <img src={require(`../logos/${detail.image}`)} alt={detail.topic} />
          <p className="author-name text-length">
            <strong>{detail.topic}</strong> by <NavLink to="#">{detail.name}</NavLink>
          </p>
          <div className="add-favourites border">
            <p>Interested about this topic?</p>
            <button>Add to Favourites <IonIcon icon={heart} /></button>
            <p className="credits">Unlimited credits</p>
          </div>
        </div>
      </div>

      <div className="topics">
        <div className="topics-container">
          <h2 className="text-length">Checklist</h2>
          <ul className="checklist-topics">
            {detail.subtopics.map((subtopic, index) => (
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
