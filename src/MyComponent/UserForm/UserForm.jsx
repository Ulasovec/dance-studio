import React, {useContext, useState} from 'react';
import {UserContext} from "../../context";

const UserForm = () => {

const [name,setName]= useState('');
const [tell, setTell]= useState('');
const {setIsUser} = useContext(UserContext);

   function onSubmit(e){
       e.preventDefault();
       localStorage.setItem('name', name);
       localStorage.setItem('tell', tell);
       setIsUser(true);
   }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>Для записи на курс заполните поля</h3>
                <label htmlFor="name">Имя</label>
                <input type="text" id="name"value={name} onChange={ event => setName(event.target.value) }/>
                <label htmlFor="tell">Телефон</label>
                <input type="text" id="tell" value={tell} onChange={ event => setTell(event.target.value) }/>
                <button type="submit" >Вход</button>
            </form>
        </div>
    );
};

export default UserForm;