import React from 'react';
import Curator from "../../images/Curator.jpg";
import './UserInfo.css';

const UserInfo = () => {
    return (
        <div className="main__form-info">
            <div className="main__curator-info">
                <h2>Ваш куратор курса</h2>
                <h2>Уласовец Кирилл Александрович</h2>
                <article>
                    <p>Образование:
                        УРКК, УДГУ(кафедра психологии и педагогики)</p>
                    <p>Опыт преподавания:
                        15 лет</p>
                    <p>Деятельность:
                        <ul>
                            <li>Организатор хип хоп объединения "PLANET of MICROBES"</li>
                            <li>Актёр тетра танца "Молчи и танцуй".</li>
                            <li>Музыкант группы "Араиль"</li>
                            <li>Преподаватель-хореограф "SOK"</li>
                        </ul>
                    </p>
                    <p>Резюме:
                        Уравновешенный, обладает терпением, находит подход к детям.
                        Владение танцевальными стилями Break dance,Hip Hop,House dance,Locking.
                        Занимается постановкой творческих номеров и спектаклей.Имеет оригинальный взгляд на танцевальную
                        культуру.
                        Работал в больших эстрадных коллективах и хореографом в театре.</p>
                </article>
            </div>
            <div>
                <img src={Curator} alt="Curator" width="350px" height="450px"/>
            </div>
        </div>
    );
};

export default UserInfo;