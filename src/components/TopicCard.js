import styled from "styled-components";
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import { TextTrim } from "./TextTrim";

const Card = styled.div`
 width: 220px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(144, 119, 119, 0.1);
    margin: 10px;
    box-sizing: border-box;
    border: 1px solid var(--lines-color, #ddd);
`;
const CardLink = styled(Link)`
   text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
`;
const CardImage = styled.img`
width:  100%;
    display: relative;
    padding: 0px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 150px;
`;

const CardInfo = styled.div`
  padding: 15px;
  background-color: var(--bg_default);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  
  height: 130px;
  display: flex;
  flex-direction: column;
`;

const CardPreTitle = styled.h2`
font-size: 0.8rem;
font-weight: 200;

`;

const CardTitle = styled.h3`
font-size: 0.9rem;
font-weight: 700;
flex-grow: 1;
`;

const CardFooter = styled.div`
font-size:0.85rem;
opacity: 0.5;
`;
export const TopicCard =({id,image,title , category , rating,author})=>{
    return(
        <Card key={id} >
          <CardLink to={`/details/${id}`} >
            <CardImage src={require('../logos/'+image)} alt={title} />
             <CardInfo >

              <CardPreTitle ><TextTrim maxLines={1}> {category}</TextTrim></CardPreTitle>
              <CardTitle ><TextTrim maxLines={2}>{title}</TextTrim></CardTitle>

              <div >
                {Array.from({ length: rating }).map((_, index) => (
                  <IonIcon key={index} icon={star} />
                ))}
              </div>
              <CardFooter >
                Author: {author}
              </CardFooter>
            </CardInfo>
          </CardLink>
        </Card>

    );

}