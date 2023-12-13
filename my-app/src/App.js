import Login from './User/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from 'react';
import NavbarH from './User/NavbarH';
import Register from './User/Register';
import New from './User/New';
import Home from './User/Home';



export const newContext = createContext()
function App() {

  const [Image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdata,setUserdata] =useState([])
  return (
    <div >
      <newContext.Provider value={{Image,setImage,setEmail,email,password,setPassword,userdata,setUserdata}}>
   <BrowserRouter>

          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/post" element={<New />}></Route>
            <Route path="/home" element={<Home />}></Route>
            
          </Routes>
        </BrowserRouter>
        </newContext.Provider>
    </div>
  );
}

export default App;
