import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

const Contact = () => {
    return (
        <div className='contact'>
            <Header />
            <h1>Let's Talk</h1>
            <ContactForm />
        </div>
    );
};

export default Contact;