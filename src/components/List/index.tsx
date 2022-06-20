import { FaPlus } from 'react-icons/fa'
import { Error } from '../Error'
import { ListItem } from '../ListItem'
import * as C from './styles'

export function List(){
  return(
    <C.Section>
      <C.SectionCenter>
        <C.SectionContent>
          <Error />
          <C.Form>
            <C.Title>grocery list</C.Title>
            <C.InputWrap>
              <C.Input type="text" placeholder="e.g. orange" />
              <C.Button type="submit">
                <FaPlus />
              </C.Button>
            </C.InputWrap>
          </C.Form>
        </C.SectionContent>
        <C.ListWrap>
          <ListItem />
          <ListItem />
        </C.ListWrap>
      </C.SectionCenter>
    </C.Section>
  )
}