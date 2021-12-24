import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../context";
import {useNavigate} from "react-router-dom";
import './AdminInput.css';
//import {admins} from "../../database/inputAdmins";
import getUsers from "../../utils/getUsers";

const AdminInput = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [admins, setAdmins] = useState([]);
     useEffect( () => {
         getUsers().then( res => {
             setAdmins(res);
         })
     },[]);

    const {setIsAuth} = useContext(UserContext);

    let navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        function setNavigate() {
            return navigate('/adminMain');
        }

        function setNavigateHome() {
            return navigate('/');
        }

         if (admins[0].nameTrue === name && admins[0].passwordTrue === password || admins[1].nameTrue === name && admins[1].passwordTrue === password) {
            setIsAuth(true);
            setNavigate();

        } else {
            alert("Не корректный ввод даных")
            setNavigateHome();
        }

    }

    if(admins.length === 0){
        return (<div>Подождите, идёт загрузка данных.</div>);
    }

    return (
        <div className="Form">
            <form className="Form__admin" onSubmit={onSubmit}>
                <h3>Администратор студии</h3>

                <label htmlFor="name">Имя</label>
                <input type="text" id="name" placeholder="admin" value={name}
                       onChange={event => setName(event.target.value)}/>
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" placeholder="admin" value={password}
                       onChange={event => setPassword(event.target.value)}/>
                <button type="submit">Вход</button>

            </form>

        </div>
    );
};

export default AdminInput;