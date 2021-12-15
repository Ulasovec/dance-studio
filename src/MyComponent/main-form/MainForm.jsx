import React, {useContext} from "react";
import './MainForm.css';
import Dance from './Dance.png';
import Teatr from './Teatr.png';
import Ind from './Id.png';
import Course from "../Course/Course";
import UserForm from "../UserForm/UserForm";
import {UserContext} from "../../context";


function MainForm() {

    const {isUser} = useContext(UserContext);

const courses=[
    {
        id: 1,
        title:'Уличный танец',
        description:`Занятия в данном модуле предусматривают развитие по
        5 направлениям уличного современного танца: break dance, popping (robot&animation), locking, modern, hip-hop`,
        price:'Стоимость: 2500 руб/месяц',
        image: Dance
    },
    {
        id: 2,
        title:'Театральная лабаратория',
        description:`В этом модуле вас ждёт полный театрально-танцевальный прокач!
                        Актёрские тренинги, многообразие танцевальных направлений и постановка полноценного танцевального спектакля!`,
        price:'Стоимость: 2500 руб/месяц',
        image: Teatr
    },
    {
        id: 3,
        title:'Индивидуальные занятия',
        description:`В любое время вы можете записаться на индивидуальное занятие с любым из наших педагогов.
                        Один клик мышки - и весь наш опыт к вашим услугам!`,
        price:'Стоимость: 800 руб/занятие',
        image: Ind
    },


]

    return (
        <div className="main__form-background">
        <div className="main__form" id="Form">
            <div className="main__form-card">
                {courses.map(item => (
                    <Course key={item.key} title={item.title} description={item.description} price={item.price} />
                ))}
            </div>
            { isUser
                ?
                <div className="main__form-input">
                    <h2>Вы вошли</h2>
                    <p>Выберите курс</p>
                </div>
                :
                <div className="main__form-input">
                    <h2>Ваш танцевальный курс</h2>
                    <UserForm/>

                </div>
            }
        </div>
        </div>
    )
}

export default MainForm;