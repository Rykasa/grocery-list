import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin: 5rem 0;
`;

export const SectionCenter = styled.div`
  width: 90vw;
  margin: auto;
  max-width: 600px;
`;

export const SectionContent = styled.div`
  background-color: #3f3d46;
  padding: 2rem;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
`;

export const Form = styled.form`
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

export const EmptyText = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  text-transform: capitalize;
  margin-top: 1rem;
  letter-spacing: .2rem;
  color: #fff;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClearButton = styled.button`
  width: max-content;
  align-self: center;
  margin-top: .5rem;
  padding: .25rem 1rem;
  background: #685aac;
  border: none;
  border-radius: .25rem;
  font-size: 1rem;
  color: #fff;
  letter-spacing: .1rem;
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
  transition: all .3s linear;

  &:hover{
    background-color: #7667c4;
  }
`;