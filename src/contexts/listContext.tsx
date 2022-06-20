import { createContext, ReactNode, useEffect, useState } from "react";
import { ItemType } from "../types/ItemType";

type ListContextData = {
  list: ItemType[];
  error: Error
  addItemToList: (text: string, isChecked?: boolean) => void
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
      error
    }}>
      { children }
    </ListContext.Provider>
  )
}