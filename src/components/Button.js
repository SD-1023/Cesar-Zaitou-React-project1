// Button.js
import React from 'react';
import { IonIcon } from '@ionic/react';
import {styled} from 'styled-components'


const StyledButton = styled.button`
background:  var(--bg-body);
border : 1px solid var(--lines-color);
display : flex;
align-items: center;
border-radius : 5px;
padding : 0.3rem 0.7rem;
gap: 0.4rem;
min-width: 120px;
font-size: 0.9rem;
`;



const Button = ({ onClick,children, icon }) => {
  return (
    <StyledButton onClick={onClick}>
      <IonIcon icon={icon}></IonIcon>
      {children}
    </StyledButton>
  );
};

export default Button;
