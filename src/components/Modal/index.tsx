import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useListContext } from '../../hooks/useListContext'
import { Error } from '../Error'
import * as C from './styles'

export function Modal(){
  const { closeModal, singleItem, itemID, editItemFromList, error } = useListContext()
  const { text, amount, isChecked } = singleItem
  const [inputText, setInputText] = useState(text)
  const [inputAmount, setInputAmount] = useState(amount)

  return(
    <C.Modal>
      <C.ModalCenter>
        { error.isvisible && <Error {...error} /> }
        <C.CloseButton type="button" onClick={closeModal}>
          <FaTimes />
        </C.CloseButton>
        <C.InputWrapper>
          <C.Label htmlFor="name">
            <C.Title>Text:</C.Title>
            <C.Input 
              type="text" 
              name="name" 
              value={inputText}
              onChange={e => setInputText(e.target.value)}
            />
          </C.Label>
          <C.Label htmlFor="amount">
            <C.Title>Amount:</C.Title>
            <C.Input 
              type="number" 
              name="amount" 
              max={99} 
              value={inputAmount}
              onChange={e => setInputAmount(parseInt(e.target.value))}
            />
          </C.Label>
        </C.InputWrapper>
        <C.ButtonWrap>
          <C.Button 
            type="button"
            onClick={() => editItemFromList({ text: inputText, amount: inputAmount, isChecked }, itemID)}
          >
            Update</C.Button>
        </C.ButtonWrap>
      </C.ModalCenter>
    </C.Modal>
  )
}