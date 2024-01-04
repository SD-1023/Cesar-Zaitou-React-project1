import { Link } from "react-router-dom";
import styled from "styled-components";
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import { useFavourites } from "../../contexts/FavouritesContext";

const StyledFavourtes = styled.div`

    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--bg_default);
    padding: 10px;
    text-align: center;
    z-index: 4;
    padding: 20px;
`;
export const FavouritesContainer = function () {
    const { favItem } = useFavourites();

    return (
        <StyledFavourtes>
            <div className="favourites-title">
                <h3>My Favourites Topics</h3>
                
            </div>
            <div className="popup-content">
                <div className="all-mini-cards">
                    {favItem.map((item) => (
                        <div key={item.id} className="mini-card border">
                            <Link to={`/topic/${item.id}`} className="card-link">
                                <img src={require(`../../logos/${item.image}`)} alt={item.topic} />
                                <div className="mini-card-info">
                                    
                                        <h4 className="text-length">{item.topic}</h4>
                                    
                                    <div className="rating">
                                        {Array.from({ length: item.rating }).map((_, index) => (
                                            <IonIcon key={index} icon={star} />
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </StyledFavourtes>
    );
};