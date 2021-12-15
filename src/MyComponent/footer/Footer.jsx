import React from "react";
import './Footer.css';
import IconFooter from './icon.png';
import In from './inst.png';
import Vk from './VK.png';




function Footer(){


    return (
        <footer>
            <div className="footer" id="Footer">
            <div className="footer__article">
                <h2>Время танцевать!</h2>
                <article>
                    <p>Нам всегда хотелось создать сообщество людей, которые так же, как и мы, любят современный танец. Опытные педагоги студии "Молчи и танцуй"» знают,
                    как сделать так, чтобы каждое занятие заряжало учеников энергией и дарило ощущение счастья и наполненности.</p>
                            <p> Готовы отправиться в невероятное путешествие? Узнай о нас больше уже сейчас!</p>
                </article>
                <img src={IconFooter} alt=""/>
            </div>
            <div className="footer__contact">
                <h3>НАШИ КОНТАКТЫ</h3>
                <p> +7 951 192 58 42
                    Viber/Telegram</p>
                <h3>Наша студия в соц сетях</h3>
                <ul>
                    <li><a href="https://vk.com/teatr_izhevsk" target="_blank" rel="nofollow noopener noreferer"> <img src={Vk} alt="icon VK"/></a></li>
                    <li><a href="https://www.instagram.com/anddance_ru/" target="_blank" rel="nofollow noopener noreferer"><img src={In} alt="icon Instagram"/> </a></li>

                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer;