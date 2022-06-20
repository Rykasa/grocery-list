import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCenter = styled.div`
  width: 90vw;
  background-color: #fff;
  border-radius: .25rem;
  padding: 2rem 1rem;
  max-width: 600px;
  margin: auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  align-items: flex-end;
  `;

export const Title = styled.span`
  display: flex;
  background-color: #7667c4;
  padding: .25rem;
  border-radius: 0;
  letter-spacing: .1rem;
  text-transform: capitalize;
  font-weight: bold;
  color: #fff;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: .25rem;
  font-size: .875rem;
  /* border-radius: .25rem; */
  border-color: #4a417b;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  color: #5f5f5f;
  outline: none;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: .5rem 1rem;
  font-size: .875rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  font-weight: bold;
  background-color: #7667c4;
  border: none;
  border-radius: .25rem;
  color: #fff;
  cursor: pointer;
  transition: all .3s linear;

  &:hover{
    background-color: #8476ca;
  }
`;
