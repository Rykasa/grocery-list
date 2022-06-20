import { List } from "./components/List";
import { Modal } from "./components/Modal";
import { Navbar } from "./components/Navbar";
import { ListContextProvider } from "./contexts/listContext";
import { useListContext } from "./hooks/useListContext";

export function App() {
  const { isModalOpen } = useListContext()

  return (
    <ListContextProvider>
      <Navbar />
      <List />
    </ListContextProvider>
  )
}

