import React, {useContext} from 'react';
import './AdminMain.css';
import {UserContext} from "../../context";
import {Link} from "react-router-dom";


const AdminMain = () => {
    const {isAuth} = useContext(UserContext);

    if (!isAuth) {
        return (
            <div>Вы не авторизованы!</div>
        )
    }

    let allUsersStr = localStorage.getItem('users');
    let allUsers = JSON.parse(allUsersStr) || [];

    return (
        <div className="admin">
            <h1>Информация о клиентах</h1>
            <div>
                {
                    allUsers.map( item => (
                        <div key={item.name+item.tel}>
                            <h2>Карточка клиента</h2>
                            <p>Имя: {item.name}</p>
                            <p>Телефон: {item.tel}</p>
                            <p>Курс: <Link to={`/course/${item.courseID}`}>{item.courseID}</Link></p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AdminMain;
