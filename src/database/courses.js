import Dance from "../images/Dance.png";
import Teatr from "../images/Teatr.png";
import Ind from "../images/Id.png";

export const courses = [
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