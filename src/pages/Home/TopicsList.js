

import styled from "styled-components";


const StyledTopicsList = styled.div`
 display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 10px;
    justify-content: space-around;
     justify-items: center;


`;


// const listApi = 'https://tap-web-1.herokuapp.com/topics/list';

function TopicsList({ children }) {

  return (
    <StyledTopicsList >
      {children}

    
    </StyledTopicsList>
  );
}

export default TopicsList;
