import React, {useContext, useState} from 'react';


import {UserContext} from "../../context";


const Course = (props) => {

    const {isUser, userCard, setUserCard, isDisabled, setIsDisabled} = useContext(UserContext);
    const [borderState, setBorderState] = useState(false);

    function saveUserCard(newUserCard) {
        const name = newUserCard.name;
        const tel = newUserCard.tel;
        const courseID = newUserCard.courseID;
        let allUsersStr = localStorage.getItem('users');
        let allUsers = JSON.parse(allUsersStr) || [];
        // Проверка есть ли уже такой user
        const foundUserIndex = allUsers.findIndex(item => item.name === name && item.tel === tel);
        if (foundUserIndex === -1) {
            // если не найдено, то добавить в начало массива
            allUsers = [newUserCard, ...allUsers];
        } else {
            // иначе заменить ID курса
            allUsers[foundUserIndex].courseID = courseID;
        }
        // Limit number of users in localStorage
        if (allUsers.length > 20) allUsers = allUsers.slice(0, 20);
        allUsersStr = JSON.stringify(allUsers);
        localStorage.setItem('users', allUsersStr);
    }

    function courseReg() {
        const newCard = {...userCard, courseID: props.id};
        setUserCard(newCard);
        saveUserCard(newCard);
        setIsDisabled(true);
        setBorderState(true);
    }

    return (
        <div style={borderState ? {backgroundColor: 'teal'} : {}}>
            <img src="" alt=""/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button disabled={!isUser || isDisabled} onClick={courseReg}>Записаться на курс</button>
        </div>
    );
};

export default Course;