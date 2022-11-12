import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Dashboard from './components/Dashboard/Dashboard';
import {Routes,Route} from "react-router-dom";
import Dishes from './components/Dashboard/Dishes';
function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/dishes" element={<Dishes/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
     
    </ChakraProvider>
  );
}

export default App;
