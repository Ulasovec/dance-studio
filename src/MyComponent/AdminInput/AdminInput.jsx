import React, {useContext, useState} from 'react';
import {UserContext} from "../../context";
import {Route, Routes} from "react-router-dom";





const AdminInput = () => {
    const [name,setName]= useState('');
    const [password, setPassword]= useState('');
    const {setIsAuth} = useContext(UserContext);
    const nameTrue = 'admin';
    const passwordTrue = 'admin';

    function onSubmit(e){
        e.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);

        if (nameTrue === name && passwordTrue === password){
            setIsAuth(true);
            console.log('privet');
        }

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>Авторизируйтесь как руководитель студии</h3>
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" value={name} onChange={ event => setName(event.target.value) }/>
                <label htmlFor="password">Пароль</label>
                <input type="text" id="password" value={password} onChange={ event => setPassword(event.target.value) }/>
                <button type="submit" >Вход</button>
            </form>

        </div>
    );
};

export default AdminInput;