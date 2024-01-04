import React from 'react';

import { heart} from 'ionicons/icons';
import styled from 'styled-components';

const StyledIcon =styled('ion-icon')`
color: var(--heart-color);
font-size: 1.5rem;


`;

const StyledFooter= styled.footer`
display: flex;
align-items: center;
justify-content: center;
gap: 0.3rem;
padding-block: 2rem;

`;
export const Footer =function(){

    
        return(
                <StyledFooter>Developed with 
                    <StyledIcon icon={heart}></StyledIcon>
                     © 2023</StyledFooter>
        );
    
}
export default Footer;

