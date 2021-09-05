import React from 'react';
import {useForm, ValidationError} from "@formspree/react";
import {Button, TextField} from "@material-ui/core";

import './Contact.css';

function Contact() {
    const [state, handleSubmit] = useForm("mgerpbog");
    if (state.succeeded) {
        return <p>I'l contact as soon as I see the message you sent!</p>;
    }
    return (
        <main>
        <div className='contactPage'>
            <div>
                <h1>If you have any job offers please contact using form below!</h1>
            </div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="email">

                </label>
                <div className='formFields'>
                    <TextField style={{width: '600px'}}
                        id="outlined-basic"
                        label='Full name'
                        variant='outlined'
                        type="text"
                        name="name"
                        autoComplete='none'
                    />
                    <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                    />

                </div>
                <div className='formFields'>
                    <TextField style={{width: '600px'}}
                        id="outlined-basic"
                        label='Email'
                        variant='outlined'
                        type="email"
                        name="email"
                        autoComplete='none'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <TextField style={{width: '600px'}}
                               id="filled-multiline-flexible"
                               label='Message'
                               variant='outlined'
                               multiline
                               rows={6}
                               type="Message"
                               name="Message"
                               autoComplete='none'
                    />
                    <ValidationError
                        prefix="Message"
                        field="Message"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <br/>
                    <Button variant='contained' color='primary' type="submit" disabled={state.submitting}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
        </main>
    );
}
export default Contact;
