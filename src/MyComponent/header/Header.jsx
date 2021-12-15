import React from "react";
import Navbar from "../navbar/Navbar";
import './Header.css';
import Log from './Logo.png'




function Header(){


    return (
       <header className="header">
           <div className="header__top">
               <section className="header__top_img">
                   <img src={Log} alt="LOGO" width="200px"/>
               </section>
               <Navbar/>
           </div>
       </header>

    )
}

export default Header;