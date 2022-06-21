import { createContext, ReactNode, useEffect, useState } from "react";
import { ItemType } from "../types/ItemType";

type ListContextData = {
  list: ItemType[];
  error: Error;
  isModalOpen: boolean;
  singleItem: ItemType;
  itemID: number;
  addItemToList: (text: string, isChecked?: boolean) => void
  removeItemFromList: (id: number) => void
  markItemAsChecked: (item: ItemType, id: number) => void
  editItemFromList: (item: ItemType, id: number) => void
  openModal: (item: ItemType, id: number) => void
  closeModal: () => void
  clearList: () => void
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
  const [list, setList] = useState<ItemType[]>(getLocalData())
  const [error, setError] = useState<Error>({ message: '', isvisible: false, hadError: false })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [singleItem, setSingleItem] = useState<ItemType>({ text: '', isChecked: false, amount: 1 })
  const [itemID, setItemID] = useState(0)

  function getLocalData(){
    const storage = localStorage.getItem('list')
    if(typeof storage === 'string'){
      const listStorage = JSON.parse(storage)
      return listStorage
    }
  }

  useEffect(() =>{
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  function addItemToList(text: string, isChecked?: boolean, amount=1){
    if(text.trim() !== ''){
      const duplicateValue = list.find((item) => item.text === text)
      if(!duplicateValue){
        console.log(duplicateValue)
        const newList = [...list]
        const newItem = {text, isChecked: false, amount}
        newList.unshift(newItem)
        setList(newList)
        setError({
          message: 'Item added',
          isvisible: true,
          hadError: false
        })
      }else{
        setError({
          message: 'Item already exists',
          isvisible: true,
          hadError: true
        })
      }
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

  function editItemFromList(item: ItemType, id: number){
    const { amount, text } = item
    if(!amount || text.trim() === ''){
      setError({ message: 'empty value', isvisible: true, hadError: true })
    }else if(amount < 1){
      setError({ message: 'Negative value', isvisible: true, hadError: true })
    }else{
      const newList = list.map((item, index) => {
        if(index === id){
          const newItem = {...item, text, amount}
          return newItem
        }
        return item
      })
      setList(newList)
      setIsModalOpen(false)
    }
  }

  function openModal(item: ItemType, id: number){
    setSingleItem(item)
    setIsModalOpen(true)
    setItemID(id)
  }

  function closeModal(){
    setIsModalOpen(false)
  }

  function clearList(){
    setList([])
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
      isModalOpen,
      closeModal,
      singleItem,
      openModal,
      itemID,
      clearList
    }}>
      { children }
    </ListContext.Provider>
  )
}