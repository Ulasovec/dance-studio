import React, {useContext, useState} from 'react';
import {UserContext} from "../../context";
import {useNavigate} from "react-router-dom";
import './AdminInput.css';


const AdminInput = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {setIsAuth} = useContext(UserContext);

    const nameTrue = 'admin';
    const passwordTrue = 'admin';
    let navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);

        function nav() {
            return navigate('/adminMain');
        }

        function navhome() {
            return navigate('/');
        }

        if (nameTrue === name && passwordTrue === password) {
            setIsAuth(true);
            nav();
        } else {
            alert("Не корректный ввод даных")
            navhome();
        }

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