import styled from "styled-components";

export const LoginBtn = styled.button`
  background-image: linear-gradient(
    to right,
    #1fa2ff 0%,
    #12d8fa 51%,
    #1fa2ff 100%
  );
  margin: 5px;
  padding: 5px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  font-size: 13px;
  border-radius: 30px;
  display: block;


  :hover {
    background-position: right center; 
    color: #fff;
    text-decoration: none;
  }
`;
