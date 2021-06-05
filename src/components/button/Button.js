import styled from 'styled-components';

export const Button = styled.button`
   border-color: #0a81ab;
   background-color: #f6b8b8;
   letter-spacing: 1px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 10px;
  background-image: linear-gradient(45deg, #0a81ab 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
  transition: background 500ms linear;
  &:hover {
    background-position: 1%;
    color: #fff;
  }
`;