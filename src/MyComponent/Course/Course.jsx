import React, {useContext} from 'react';

import Dance from './Dance.png';
import {UserContext} from "../../context";


const Course = (props) => {

    const {isUser, userCard, setUserCard} = useContext(UserContext);

    function saveUserCard(newUserCard) {
        const name = newUserCard.name;
        const tel = newUserCard.tel;
        const courseID = newUserCard.courseID;
        let allUsersStr = localStorage.getItem('users');
        let allUsers = JSON.parse(allUsersStr) || [];
        const foundUserIndex = allUsers.findIndex(item => item.name === name && item.tel === tel);
        // if user exists rewrite course title
        if (foundUserIndex === -1) {
            allUsers.unshift({ name, tel, courseID });
        } else {
            allUsers[foundUserIndex].courseID = courseID;
        }
        // Limit number of users in localStorage
        if (allUsers.length > 20) allUsers = allUsers.slice(0,20);
        allUsersStr = JSON.stringify(allUsers);
        localStorage.setItem('users', allUsersStr);
    }

    function courseReg() {
        const newCard = {...userCard, courseID: props.id};
        console.log(newCard);
        setUserCard(newCard);
        saveUserCard(newCard);
    }

    return (
        <div>
            <img src={Dance} alt="icon dance"/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button disabled={!isUser} onClick={courseReg}>Записаться на курс</button>
        </div>
    );
};

export default Course;