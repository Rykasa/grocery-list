import { FaPlus } from 'react-icons/fa'
import { ListItem } from '../ListItem'
import * as C from './styles'

export function List(){
  return(
    <C.Section>
      <C.SectionCenter>
        <C.SectionContent>
          <C.ErrorMessage>Error</C.ErrorMessage>
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
        <div>
          <ListItem />
          <ListItem />
        </div>
      </C.SectionCenter>
    </C.Section>
  )
}