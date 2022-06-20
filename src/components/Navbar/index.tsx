import {
  Nav,
  NavbarCenter,
  NavbarTitle
} from './styles'
import { FaSearchDollar } from 'react-icons/fa'

export function Navbar(){
  return(
    <Nav>
      <NavbarCenter>
        <NavbarTitle>Gr<span><FaSearchDollar /></span>cery List</NavbarTitle>
      </NavbarCenter>
    </Nav>
  )
}