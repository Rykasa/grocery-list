import { FormEvent, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useListContext } from '../../hooks/useListContext'
import { Error } from '../Error'
import { ListItem } from '../ListItem'
import * as C from './styles'

export function List(){
  const { list, addItemToList, error } = useListContext()
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
        <C.ListWrap>
          {list.map((item, index) =>{
            return(
              <ListItem {...item} key={index} />
            )
          })}
        </C.ListWrap>
      </C.SectionCenter>
    </C.Section>
  )
}