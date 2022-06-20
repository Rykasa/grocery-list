import { List } from "./components/List";
import { Modal } from "./components/Modal";
import { Navbar } from "./components/Navbar";
import { ListContextProvider } from "./contexts/listContext";

export function App() {
  return (
    <ListContextProvider>
      <Navbar />
      <List />
      {/* <Modal /> */}
    </ListContextProvider>
  )
}

