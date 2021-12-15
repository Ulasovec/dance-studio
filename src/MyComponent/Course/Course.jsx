import React, {useContext} from 'react';

import Dance from './Dance.png';
import {UserContext} from "../../context";


const Course = (props) => {

    const {isUser} = useContext(UserContext);

    return (
        <div>
            <img src={Dance} alt="icon dance"/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button disabled={!isUser}>Записаться на курс</button>
        </div>
    );
};

export default Course;