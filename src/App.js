import './App.css';
import React, {useState} from "react";
import Header from "./MyComponent/header/Header";
import Main from "./MyComponent/main/Main";
import Footer from "./MyComponent/footer/Footer";
import {UserContext} from "./context";
import AdminInput from "./MyComponent/AdminInput/AdminInput";
import {Route, Routes} from "react-router-dom";

function App() {
    const [isUser, setIsUser] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
  return (
      <UserContext.Provider value={{isUser, setIsUser, isAuth, setIsAuth}}>
        <div className="body">

            <Routes>
                <Route path="/" element = {<div>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>}/>
                <Route path="/admin" element = {<div><AdminInput/></div>}/>
            </Routes>




        </div>




      </UserContext.Provider>
  );
}
export default App;
