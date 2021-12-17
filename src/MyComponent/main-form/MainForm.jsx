import React, {useContext} from "react";
import './MainForm.css';
import Dance from './Dance.png';
import Teatr from './Teatr.png';
import Ind from './Id.png';
import Course from "../Course/Course";
import UserForm from "../UserForm/UserForm";
import {UserContext} from "../../context";
import UserInfo from "../UserInfo/UserInfo";
import {courses} from "../../database/courses";

function MainForm() {

    const {isUser} = useContext(UserContext);

    return (
        <div className="main__form-background">
        <div className="main__form" id="Form">
            <div className="main__form-card">
                {courses.map(item => (
                    <Course key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} />
                ))}
            </div>
            { isUser
                ?
                <UserInfo/>
                :
                <div className="main__form-input">
                    <h2>Ваш танцевальный курс</h2>
                    <UserForm/>

                </div>
            }
        </div>
        </div>
    )
}

export default MainForm;