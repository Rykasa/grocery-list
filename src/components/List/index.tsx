import { FormEvent, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useListContext } from '../../hooks/useListContext'
import { Error } from '../Error'
import { ListItem } from '../ListItem'
import { Modal } from '../Modal'
import * as C from './styles'

export function List(){
  const { list, addItemToList, error, isModalOpen, clearList } = useListContext()
  const [text, setText] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setText('')
  }
  return(
    <C.Section>
      <C.SectionCenter>
        <C.SectionContent>
          { error.isvisible && <Error {...error} /> } 
          <C.Form onSubmit={handleSubmit}>
            <C.Title>grocery list</C.Title>
            <C.InputWrap>
              <C.Input 
                type="text" 
                placeholder="e.g. orange" 
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <C.Button type="submit" onClick={() => addItemToList(text)}>
                <FaPlus />
              </C.Button>
            </C.InputWrap>
          </C.Form>
        </C.SectionContent>
        {list?.length === 0 ? (<C.EmptyText>empty list</C.EmptyText>) : (
          <C.ListWrap>
            {list.map((item, index) =>{
              return(
                <ListItem {...item}  id={index} key={index} />
              )
            })}
            <C.ClearButton
              type="button"
              onClick={clearList}
            >
              Clear List</C.ClearButton>
          </C.ListWrap>
        )}
      </C.SectionCenter>
      { isModalOpen && <Modal /> }
    </C.Section>
  )
}