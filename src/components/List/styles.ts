import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin: 5rem 0;
`;

export const SectionCenter = styled.div`
  width: 95vw;
  margin: auto;
  max-width: 600px;
`;

export const SectionContent = styled.div`
  background-color: #3f3d46;
  padding: 2rem;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  text-transform: capitalize;
  letter-spacing: .1rem;
  color: #fff;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: .5rem .75rem;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
  margin-top: 1rem;
  border: none;
  outline: none;
  color: #5f5f5f;
`;

export const Button = styled.button`
  font-size: 1.8rem;
  padding: .2rem .5rem;
  border: none;
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #685aac;
  transition: all .3s linear;

  &:hover{
    color: #7667c4;
  }
`;

export const ListWrap = styled.div`
  
`;
