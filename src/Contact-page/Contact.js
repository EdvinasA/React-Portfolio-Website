import React from 'react';
import {useForm, ValidationError} from "@formspree/react";
import {Button, TextField} from "@material-ui/core";


function Contact() {
    const [state, handleSubmit] = useForm("mgerpbog");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className='homePage' style={{ position: 'fixed', textAlign: 'center', border: '2px solid black'}}>
            <form onSubmit={handleSubmit} className='form-control'>
                <label htmlFor="email">

                </label>
                <div>
                    First name and last name
                </div>
                <div>
                    <TextField
                        id="outlined-basic" label='Full name' variant='outlined'
                        type="text"
                        name="name"
                    />
                    <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div>
                    Email address
                </div>
                <div>
                    <TextField
                        id="outlined-basic" label='Email address' variant='outlined'
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    Message
                </div>
                <div>
                    <TextField
                        id="outlined-basic" label='Message' variant='outlined' multiline rows={6}
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
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
    );
}

export default Contact;
