import { FaCheckCircle, FaChevronCircleDown, FaChevronCircleUp, FaEdit, FaTimesCircle } from 'react-icons/fa'
import * as C from './styles'

export function ListItem(){
  return(
    <C.Article>
      <C.ItemWrap>
        <C.Text>Orange</C.Text>
        <C.ButtonWrap>
          <C.Button>
            <FaCheckCircle />
          </C.Button>
          <C.Button>
            <FaEdit />
          </C.Button>
          <C.Button>
            <FaTimesCircle />
          </C.Button>
        </C.ButtonWrap>
        <C.AmountWrap>
          <C.Amount>1</C.Amount>
        </C.AmountWrap>
        {/* <C.AmountButtons>
          <C.AmountButton>
            <FaChevronCircleUp />
          </C.AmountButton>
          <C.AmountButton>
            <FaChevronCircleDown />
          </C.AmountButton>
        </C.AmountButtons> */}
      </C.ItemWrap>
    </C.Article>
  )
}