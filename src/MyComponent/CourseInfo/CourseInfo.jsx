import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {courses} from "../../database/courses";
import './CourseInfo.css';

const CourseInfo = () => {

    const params = useParams();

    const course = courses.find(item => item.id === Number(params.id));

    return (
        <div className="course">
            Page ID: {params.id}
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>{course.price}</p>
        </div>
    );
};

export default CourseInfo;