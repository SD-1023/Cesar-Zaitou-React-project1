import React from 'react';
import { NavLink} from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { moon,heart, star} from 'ionicons/icons';

const Header = () => {
  return (
    <div>
    <header>
      <h2><NavLink to="/">Web Topics</NavLink></h2>
      <nav>
        <ul>
          <li className="border" name="dark" id="theme-toggle"><IonIcon icon={moon}></IonIcon><span>Dark Mode</span></li>
          <li className="border" name="favourites" id="favourites"><IonIcon icon={heart}></IonIcon><span>Favourites</span></li>
        </ul>
      </nav>

      <div id="popupContainer" className="popup-container">
      <div className="favourites-title">
        <h3>My Favourites Topics</h3>
        <span id="closePopupBtn" className="close-popup-btn"></span>
      </div>
      <div className="popup-content">



        <div className="all-mini-cards">
          <div className="mini-card border">

            <NavLink to="details" className="card-link">
              <img src="logos/analytics.png" alt="analytics"/>
              <div className="mini-card-info">
                <div className="card-title ">

                  <h4 className="text-length">Card 1 dfihapfoh dsahf odsah fopsa</h4>

                </div>
                <div className="rating">
                  <IonIcon icon={star}></IonIcon>
                 

                </div>

              </div>
            </NavLink>


          </div>

        </div>
      </div>
    </div>
    </header>

    <div className="welcome">
      <div className="wel-block">
        <div className="triangle1"></div>
        <div className="triangle2"></div>
        <h2>Welcome to our website!</h2>
        <p>We have a new design that's fresh, modern, and easy to use </p>
      </div>
    </div>

    </div>
  );
};

export default Header;
