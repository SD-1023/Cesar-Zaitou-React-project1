import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';





// const listApi = 'https://tap-web-1.herokuapp.com/topics/list';

function LoadTopics({topics}) {
 
  return (
    <div className="all-card" id="card-data">
 
      {topics.map((topic) => (
      
         
        <div key={topic.id} className="card border">
          <NavLink to={`/details/${topic.id}`} className="card-link">
          <img src={require(`../logos/${topic.image}`)} alt={topic.image} />
       

            <div className="card-info">
              <div className="card-title">
                <p className="text-length">{topic.category}</p>
                <h3 className="topic-card-header">{topic.topic}</h3>
              </div>
              <div className="rating">
                {Array.from({ length: topic.rating }).map((_, index) => (
                  <IonIcon key={index} icon={star} />
                ))}
              </div>
              <div className="author text-length">
                {topic.name}
              </div>
            </div>
          </NavLink>
        </div>
         
      ))}
    </div>
  );
}

export default LoadTopics;
