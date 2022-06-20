import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: #1644ce;
  /* height: 3rem; */
  padding: 1rem 0;
`;

export const NavbarCenter = styled.div`
  width: 95vw;
  margin: auto;
  display: flex;
  align-items: center;
`

export const NavbarTitle = styled.h3`
  color: #fff;
  text-transform: uppercase;
  display: flex;
  letter-spacing: .1rem;
  font-size: 1.1rem;

  span{
    color: #a32d26;
    font-size: 1.5rem;
    margin-left: .1rem;
  }
`;