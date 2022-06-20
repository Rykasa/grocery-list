import { Error } from '../Error'
import * as C from './styles'

export function Modal(){
  return(
    <C.Modal>
      <C.ModalCenter>
        {/* <Error /> */}
        <C.InputWrapper>
          <C.Label htmlFor="name">
            <C.Title>Text:</C.Title>
            <C.Input type="text" name="name" id="name" />
          </C.Label>
          <C.Label htmlFor="amount">
            <C.Title>Amount:</C.Title>
            <C.Input type="number" name="amount" id="amount" max={99} />
          </C.Label>
        </C.InputWrapper>
        <C.ButtonWrap>
          <C.Button type="button">Update</C.Button>
        </C.ButtonWrap>
      </C.ModalCenter>
    </C.Modal>
  )
}