import React, {useContext} from 'react';
import {UserContext} from "../context";

const Ur = ({ccc}) => {

    const {allUsers} = useContext(UserContext);

    return (
        <div>
            <h1>{ccc.title}</h1>
            <p>{}</p>
            <p>{}</p>
        </div>
    );
};

export default Ur;