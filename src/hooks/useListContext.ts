import { useContext } from "react";
import { ListContext } from "../contexts/listContext";

export function useListContext(){
  return useContext(ListContext)
}