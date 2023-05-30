import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Title = styled.h2`
  color: #fbb03b;
  font-weight: 300;
  text-align: center;
  margin: 0 2%;
`;

export const FormLogin = styled.form`
  width: 30rem;
  height: 30vh;
  padding: 0 1%;
  margin-top: 6%;

  @media (max-width: 600px){
    width: 90vw;
  }

  @media (max-width: 350px){
    margin: 15%;
  }
  `;

export const InputLogin = styled.input`
  width: 100%;
  min-height: 25%;
  border: 1px solid #8c8c8c;
  padding-left: 3%;
  color: #959595;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 5%;
`;

export const FooterLogin = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 5%;

  @media (max-width: 350px){
    margin: 15% 0;
  }
`;

export const ForgotPassword = styled.a`
  cursor: pointer;
  color: #331a5c;
  text-decoration: none;

  &:hover{
    font-weight:500
  }
`;

export const SignUp = styled(ForgotPassword)`
  font-weight: 500;
`;