import React, {useContext, useState} from 'react';
import {UserContext} from "../../context";
import "./UserForm.css";

const UserForm = () => {

    const [name, setName] = useState('');
    const [tell, setTell] = useState('');
    const {setIsUser, setUserCard} = useContext(UserContext);

    function onSubmit(e) {
        e.preventDefault();
        if (!name || !tell) {
            alert('Для записи на курс заполните поля');
        } else {
            localStorage.setItem('name', name);
            localStorage.setItem('tell', tell);
            setIsUser(true);
            setUserCard({name: name, tel: tell});
        }
    }


    return (
        <div className="Form__User">
            <form className="Form__User-form" onSubmit={onSubmit}>
                <h3>Для записи на курс заполните поля</h3>
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" placeholder="Ваше имя" value={name}
                       onChange={event => setName(event.target.value)}/>
                <label htmlFor="tell">Телефон</label>
                <input type="tel" id="tell" placeholder="Ваш номер телефона" value={tell}
                       onChange={event => setTell(event.target.value)}/>
                <button type="submit">Вход</button>
            </form>
        </div>
    );
};

export default UserForm;