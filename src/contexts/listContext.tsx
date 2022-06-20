import { createContext, ReactNode, useEffect, useState } from "react";
import { ItemType } from "../types/ItemType";

type ListContextData = {
  list: ItemType[];
  error: Error;
  isModalOpen: boolean;
  addItemToList: (text: string, isChecked?: boolean) => void
  removeItemFromList: (id: number) => void
  markItemAsChecked: (item: ItemType, id: number) => void
  editItemFromList: () => void
}

type ListContextProviderProps = {
  children: ReactNode
}

type Error = {
  message: string;
  isvisible: boolean;
  hadError: boolean;
}

export const ListContext = createContext({} as ListContextData)

export function ListContextProvider({children}: ListContextProviderProps){
  const [list, setList] = useState<ItemType[]>([])
  const [error, setError] = useState<Error>({ message: '', isvisible: false, hadError: false })
  const [isModalOpen, setIsModalOpen] = useState(false)

  function addItemToList(text: string, isChecked?: boolean){
    if(text.trim() !== ''){
      setList([...list, {text, isChecked: false}])
      setError({
        message: 'Item added',
        isvisible: true,
        hadError: false
      })
    }else{
      setError({
        message: 'Empty value',
        isvisible: true,
        hadError: true
      })
    }
  }

  function removeItemFromList(id: number){
    const newList = list.filter((item, index) => index !== id)
    setList(newList)
  }

  function markItemAsChecked(item: ItemType, id: number){
    // const newList = list.map((item, index) =>{
    //   if(index === id){
    //     item.isChecked = true
    //   }
    //   return item
    // })

    const newList = list.filter((item, index) => index !== id)
    const newItem = {...item, isChecked: true}
    newList.push(newItem)
    setList(newList)
  }

  function editItemFromList(){
    setIsModalOpen(true)
  }


  useEffect(() =>{
    const timeout = setTimeout(() =>{
      setError({ message: '', isvisible: false, hadError: false })
    }, 3000)
    return () => clearTimeout(timeout)
  }, [error])

  return(
    <ListContext.Provider value={{
      list,
      addItemToList,
      error,
      removeItemFromList,
      markItemAsChecked,
      editItemFromList,
      isModalOpen
    }}>
      { children }
    </ListContext.Provider>
  )
}