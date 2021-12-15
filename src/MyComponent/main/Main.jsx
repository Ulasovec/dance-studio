import React from "react";
import './Main.css';
import Mit_1 from './Mit_1.jpg';
import Mit_2 from './Mit_2.jpg';
import Mit_3 from './Mit_4.jpg';
import Mit_4 from './Mit_5.jpg';
import Start from './start.jpg';
import MainForm from "../main-form/MainForm";


function Main(){


    return (
        <main>
            <div className="main">
            <div className="main__start">
                <div className="main__start-title">
                <h1>Танцевальная студия
                    </h1>

                <p>Набираем детей от 7 лет в группы</p>
                    <p>Break Dance, Hip hop, Modern</p>
                </div>
                <div className="main__start-img">
                    <img src={Start} alt="" width="100%" height="100%" />
                </div>
            </div>
            <div className="main__content">
                 <div className="main__content-article" id="article" >
                     <h2>О студии</h2>
                     <article>
                         <p>Молчи и танцуй – это творческий коллектив единомышленников и профессиональных танцоров,
                         существующий с 2010 года, поставивший более 6 спектаклей и имеющий за плечами гастроли в 8 регионах России,
                         а также за рубежом.</p>
                         <p>Спектакли Молчи и танцуй, такие как "Волшебник изумрудного города", "Маленький принц", "Алые паруса" и т.д.,
                         завоевали любовь взрослых и юных зрителей благодаря оригинальному сочетанию танцев в стилях Break dance,
                         Hip Hop и House, глубоким смыслам, динамичности сюжетов, пластической выразительности и мастерству исполнителей.</p>
                     </article>
                 </div>
                 <div className="main__content-img">
                     <div><img src={Mit_1} alt="" width="100%" height="100%" /></div>
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