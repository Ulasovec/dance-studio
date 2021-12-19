import React from "react";
import './Main.css';
import Mit_1 from '../../images/Mit_1.jpg';
import Mit_2 from '../../images/Mit_2.jpg';
import Mit_3 from '../../images/Mit_4.jpg';
import Mit_4 from '../../images/Mit_5.jpg';
import Start from '../../images/start.jpg';
import MainForm from "../main-form/MainForm";
import Mit from './Mit.mp4';

function Main() {


    return (
        <main>
            <div className="main">
                <div className="main__start">
                    <div className="main__start-title">
                        <h1>Танцевальная студия </h1>
                        <p>Набираем детей от 7 лет в группы</p>
                        <p>Break Dance, Hip hop, Modern</p>
                    </div>
                    <div className="main__start-img">
                        <img src={Start} alt="" width="100%" height="100%"/>
                    </div>
                </div>
                <div className="main__content">
                    <div className="main__content-article" id="article">
                        <h2>О студии</h2>
                        <article>
                            <p><span>Молчи и танцуй</span> – это творческий коллектив единомышленников и
                                профессиональных танцоров,
                                существующий с 2010 года, поставивший более 6 спектаклей и имеющий за плечами гастроли в
                                8 регионах России,
                                а также за рубежом.</p>
                            <p>Спектакли Молчи и танцуй, такие как <span>"Волшебник изумрудного города", "Маленький принц", "Алые паруса" и т.д.</span>,
                                завоевали любовь взрослых и юных зрителей благодаря оригинальному сочетанию танцев в
                                стилях Break dance,
                                Hip Hop и House, глубоким смыслам, динамичности сюжетов, пластической выразительности и
                                мастерству исполнителей.</p>
                        </article>
                        <video autoPlay loop muted width="90%" height="50%">
                            <source src={Mit} type='video/mp4'/>
                        </video>
                        <h2>Адрес студии</h2>
                        <p> Ижевск,<span> улица Карла Маркса 300А</span> (школа SOK) </p>
                    </div>
                    <div className="main__content-img">
                        <div><img src={Mit_1} alt="" width="100%" height="100%"/></div>
                        <div><img src={Mit_2} alt="" width="100%" height="100%"/></div>
                        <div><img src={Mit_3} alt="" width="100%" height="100%"/></div>
                        <div><img src={Mit_4} alt="" width="100%" height="100%"/></div>
                    </div>
                </div>
            </div>
            <MainForm/>
        </main>

    )
}

export default Main;