import React from 'react';
import { useFavourites } from '../contexts/FavouritesContext';
import { heartOutline, moonOutline, star } from 'ionicons/icons';
import styled from "styled-components"
import { Container } from './Container';
import Button from '../components/Button'; // Import your Button component


const StyledHeader = styled.header`
    background : var(--bg_default);
    padding-block : 1rem;
    box-shadow: 0 0 10px -5px rgba( 0,0,0,0.3);

`;

const HeaderContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const HeaderTitle = styled.h1`

font-size: 1rem;
font-weight: 400;
`;

const StyledNav = styled.nav`
display: flex;
gap :4px;
`;

const StyledLink= styled.a`
text-decoration: none;
color: var(--brand-primary);

`;




const Header = () => {

  const {toggleIsFavOpen}=useFavourites();

  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderContent>
            <HeaderTitle><StyledLink to="/">Web Topics</StyledLink></HeaderTitle>
            <StyledNav>
              <Button icon={moonOutline}>Dark Mode</Button>
              <Button icon={heartOutline} onClick={
                toggleIsFavOpen
              }>Favourites</Button>

            </StyledNav>

          </HeaderContent>

         
        </Container>
      </StyledHeader>



    </>
  );
};

export default Header;
