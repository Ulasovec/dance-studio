import './App.css';
import React, {useState} from "react";
import Header from "./MyComponent/header/Header";
import Main from "./MyComponent/main/Main";
import Footer from "./MyComponent/footer/Footer";
import {UserContext} from "./context";

function App() {
    const [isUser, setIsUser] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
  return (
      <UserContext.Provider value={{isUser, setIsUser, isAuth, setIsAuth}}>
        <div className="body">
            <Header/>
            <Main/>
            <Footer/>
        </div>
      </UserContext.Provider>
  );
}
export default App;
