
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm(){
    // get variables for field values
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // check if fields are valid
    function handleChange(e){
        if(e.target.value.length <= 280){
            if(e.target.value.length === 0){
                setErrorMessage('All fields required.');
            }
        }
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Your email is invalid.');
            }
            else{
                if(!e.target.value.length){
                    setErrorMessage(`${e.target.name} is required.`);
                }
                else{
                    setErrorMessage('');
                }
            }
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    // submit form
    function handleSubmit(e){
        e.preventDefault();
    }

    // need name, email, and message
    return (
        <section>
            <h1 id = 'h1tag'>Contact me</h1>
            <form id = 'contact-form' onSubmit = {handleSubmit} >
                <div>
                    <label htmlFor = 'name'>Name: </label>
                    <input type = 'text' name = 'name' defaultValue = {name} onBlur = {handleChange} />
                </div>
                <div>
                    <label htmlFor = 'email'>Email address: </label>
                    <input type = 'email' name = 'email' defaultValue = {email} onBlur = {handleChange} />
                </div>
                <div>
                    <label htmlFor = 'message'>Message: </label>
                    <textarea name = 'message' rows = '5' defaultValue = {message} onBlur = {handleChange} />
                    {errorMessage && (
                        <div>
                            <p className = 'error-text'>{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button id = 'button' type = 'submit'>Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;