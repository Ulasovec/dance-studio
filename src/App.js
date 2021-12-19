import './App.css';
import React, {useState} from "react";
import Header from "./MyComponent/header/Header";
import Main from "./MyComponent/main/Main";
import Footer from "./MyComponent/footer/Footer";
import {UserContext} from "./context";
import AdminInput from "./MyComponent/AdminInput/AdminInput";
import {Redirect, Route, Routes} from "react-router-dom";
import AdminMain from "./MyComponent/AdminMain/AdminMain";
import CourseInfo from "./MyComponent/CourseInfo/CourseInfo";

function App() {
    const [isUser, setIsUser] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [userCard, setUserCard] = useState(undefined);
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <UserContext.Provider
            value={{isUser, setIsUser, isAuth, setIsAuth, userCard, setUserCard, isDisabled, setIsDisabled}}>
            <div>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <Header/>
                            <Main/>
                            <Footer/>
                        </div>}/>
                    <Route path="/admin" element={<AdminInput/>}/>
                    <Route path="/adminMain" element={<AdminMain/>}/>
                    <Route path="/course/:id" element={<CourseInfo/>}/>

                </Routes>
            </div>

        </UserContext.Provider>
    );
}

export default App;
