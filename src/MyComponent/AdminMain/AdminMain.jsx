import React, {useContext, useEffect, useState} from 'react';
import './AdminMain.css';
import {UserContext} from "../../context";
import {Link} from "react-router-dom";


const AdminMain = () => {
    const {isAuth} = useContext(UserContext);
    const [value,setValue] = useState('');
    let allUsersStr = localStorage.getItem('users');
    let allUsers = JSON.parse(allUsersStr) || [];
    const [searchUsers, setSearchUsers] = useState(allUsers);

    useEffect(() => {
        const res = allUsers.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        setSearchUsers(res);
    }, [value]);

    if (!isAuth) {
        return (
            <div>Вы не авторизованы!</div>
        )
    }

    return (
        <div className="admin">
            <h1>Информация о клиентах</h1>
            <form>

                <input type="text" id="look" placeholder="Поиск" value={value} onChange={(e) => setValue(e.target.value)}/>

            </form>
            <div className="admin__user-info">
                {
                    searchUsers.map( item => (
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
