import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Flex w="100vw">
      <Sidebar />
      <Outlet />
    </Flex>
  );
}

export default App;
