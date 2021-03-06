import React, {useContext} from "react";
import './MainForm.css';
import Course from "../Course/Course";
import UserForm from "../UserForm/UserForm";
import {UserContext} from "../../context";
import UserInfo from "../UserInfo/UserInfo";
import {courses} from "../../database/courses";
import UserMessage from "../UserMessage/UserMessage";

function MainForm() {

    const {isUser, isDisabled} = useContext(UserContext);

    return (
        <div className="main__form-background">
            <div className="main__form" id="Form">
                <div className="main__form-card">
                    {courses.map(item => (
                        <Course key={item.id} id={item.id} title={item.title} description={item.description}
                                price={item.price}/>

                    ))}
                </div>

                {isUser
                    ?
                    !isDisabled ? <UserInfo/> : <UserMessage/>
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