import { useState } from 'react';
import { FaCheckCircle, FaChevronCircleDown, FaChevronCircleUp, FaEdit, FaTimesCircle } from 'react-icons/fa'
import { useListContext } from '../../hooks/useListContext';
import * as C from './styles'

type ListItemProps = {
  text: string;
  isChecked: boolean;
  id: number;
  amount: number;
}

export function ListItem({ text, isChecked, id, amount }: ListItemProps){
  const { removeItemFromList, markItemAsChecked, openModal } = useListContext()

  return(
    <C.Article>
      <C.ItemWrap isChecked={isChecked}>
        <C.Text isChecked={isChecked}>{ text }</C.Text>
        <C.ButtonWrap>
          <C.CheckButton 
            type="button"
            onClick={() => markItemAsChecked({text, isChecked, amount}, id)}
            isChecked={isChecked}
          >
            <FaCheckCircle />
          </C.CheckButton>
          <C.EditButton 
            type="button"
            onClick={() => openModal({ text, isChecked, amount }, id)}                  
            isChecked={isChecked}
          >
            <FaEdit />
          </C.EditButton>
          <C.DeleteButton type="button" onClick={() => removeItemFromList(id)}>
            <FaTimesCircle />
          </C.DeleteButton>
        </C.ButtonWrap>
        <C.AmountWrap>
          <C.Amount isChecked={isChecked}>{ amount }</C.Amount>
        </C.AmountWrap>
      </C.ItemWrap>
    </C.Article>
  )
}