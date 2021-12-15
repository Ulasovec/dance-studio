import React from "react";
import './Navbar.css';
import Icon from './icon VK.png'
import Insta from './Insta.png'


function Navbar(){


    return (
        <nav className="header__top_navigator">
             <ul className="nav__content">
                  <li><a href="#article">О&nbsp;студии</a></li>
                 <li> <a href="#Form">Записаться на курс</a></li>
                 <li><a href="#Footer">Котакты</a></li>
            </ul>
            <ul className="nav__network" >
                <li><a href="https://vk.com/teatr_izhevsk" target="_blank" rel="nofollow noopener noreferer"> <img src={Icon} alt="icon VK"/></a></li>
               <li><a href="https://www.instagram.com/anddance_ru/" target="_blank" rel="nofollow noopener noreferer"><img src={Insta} alt="icon Instagram"/> </a></li>

            </ul>
        </nav>
    )
}

export default Navbar;