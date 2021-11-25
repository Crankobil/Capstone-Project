import React, {useState} from 'react'
import {Login} from '../../components/login/Login'
import {PasswordReset} from '../../components/password-reset/PasswordReset'
import "./entry.style.css"

export const Entry = () => {
const [email, setEmail] = useState ('')
const [password, setPassword] = useState ('')
const [formLoad, setformLoad] = useState ('login')

const handleOnChange = e => {
    const {name, value} = e.target;

    switch(name){
        case 'email':
        setEmail(value);
        break;
        case 'password':
        setPassword(value);
        break;

        default:
        break;
    }
}

const handleOnSubmit = e => {
    e.preventDefault()

    if (!email || !password){
       return alert("Please fill in all fields!")
    }
}

const handleOnResetSubmit = e => {
    e.preventDefault()

    if (!email){
       return alert("Please enter the email!")
    }
}

const formSwitcher = (formType) => {
    setformLoad(formType)
}

return (
    <div className="entry-page">
        {formLoad === 'login' && <Login handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formSwitcher={formSwitcher} email={email} password={password}/>}
        {formLoad === 'reset' && <PasswordReset handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher} email={email}/>}
        
    </div>
)
}

/* <div className=" mb-4 bg-dark text-white">
    <div className="container-fluid py-5 text-center">
      <h1 className="display-5 fw-bold">Welcome to the Ankobil's Page!</h1>
     
    </div>
  </div> */