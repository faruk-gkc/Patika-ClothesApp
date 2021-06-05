import styled from 'styled-components';

export const Price = styled.div`
  background-color:  #255C99;
  position: relative;
  text-decoration: none;
  color: #fff;
  margin: 50px 50px;
  text-align: center;
  border: none;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 1rem;
  transition-duration: 0.4s;
  &::after{
    position: absolute;
  content: "";
  top: 0;
  left: -36px;
  width: 0;
  height: 0;
  display: inline-block;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-right: 18px solid #255C99;
  border-left: 18px solid transparent;
  }
  &:hover{
    box-shadow: 0 12px 16px 0 rgba(15,10,89,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;