import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 28vh;
  background-color: rgb(51,26,92);
  background: linear-gradient(90deg, rgba(51,26,92,1) 0%, rgba(74,43,126,1) 65%, rgba(96,59,158,1) 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px){
    height: 20vh;
  }
`;

export const ImgTitle = styled.img`
  max-width: 22%;
  height: 90%;
  margin-left: 5%;

  @media (max-width: 600px){
    display: none;
  }
`;
