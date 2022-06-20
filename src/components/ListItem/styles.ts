import styled from "styled-components";

export const Article = styled.article`
  margin: 1rem 0;
  position: relative;
`;

export const ItemWrap = styled.div`
  padding: .5rem 1.5rem;
  background-color: #4b4b4b;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: #fff;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  color: #fff;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1rem;

  &:nth-of-type(1){
    color: green;
  }

  &:nth-of-type(2){
    color: #97773b;
  }

  &:nth-of-type(3){
    color: #a32d26;
  }

  &:hover{
    filter: brightness(1.2);
  }
`;

export const AmountWrap = styled.div`
  position: absolute;
  top: 1rem;
  left: .25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.span`
  background-color: green;
  border-radius: 50%;
  padding: .25rem .25rem;
  display: flex;
  justify-content: center;
  min-width: 1.5rem;
  position: absolute;
  color: #fff;
`;

export const AmountButtons = styled.div`
  position: absolute;
  top: .25rem;
  right: -.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const AmountButton = styled.button`
  background: none;
  border: none;
  color: aqua;
  cursor: pointer;
  font-size: 1rem;

  &:nth-of-type(1){
    margin: -.5rem;
  }
`;

