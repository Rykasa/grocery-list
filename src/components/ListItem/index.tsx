import { useState } from 'react';
import { FaCheckCircle, FaChevronCircleDown, FaChevronCircleUp, FaEdit, FaTimesCircle } from 'react-icons/fa'
import { useListContext } from '../../hooks/useListContext';
import * as C from './styles'

type ListItemProps = {
  text: string;
  isChecked: boolean;
  id: number;
}

export function ListItem({ text, isChecked, id }: ListItemProps){
  const { removeItemFromList, markItemAsChecked } = useListContext()

  return(
    <C.Article>
      <C.ItemWrap isChecked={isChecked}>
        <C.Text>{ text }</C.Text>
        <C.ButtonWrap>
          <C.CheckButton 
            type="button"
            onClick={() => markItemAsChecked({text, isChecked}, id)}
            isChecked={isChecked}
          >
            <FaCheckCircle />
          </C.CheckButton>
          <C.EditButton 
            type="button"
            isChecked={isChecked}
          >
            <FaEdit />
          </C.EditButton>
          <C.DeleteButton type="button" onClick={() => removeItemFromList(id)}>
            <FaTimesCircle />
          </C.DeleteButton>
        </C.ButtonWrap>
        <C.AmountWrap>
          <C.Amount isChecked={isChecked}>1</C.Amount>
        </C.AmountWrap>
      </C.ItemWrap>
    </C.Article>
  )
}