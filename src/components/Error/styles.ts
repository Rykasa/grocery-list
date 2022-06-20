import styled from "styled-components";

export const ErrorMessage = styled.div<{ hadError: boolean }>`
  padding: .25rem 1rem;
  background-color: ${({ hadError }) => hadError ? '#a32d26' : 'green'} ;
  width: max-content;
  border-radius: .25rem;
  margin: auto;
  color: #fff;
  letter-spacing: .1rem;
  margin-bottom: 1rem;
`;