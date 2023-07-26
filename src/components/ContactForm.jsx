import { useRef, useState } from 'react';
import SocialNetwork from './SocialNetwork';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const [firstname, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [textarea, setTextarea] = useState('');

    console.log(lastName, firstname, email, textarea);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_5wk0o1s',
                'template_5agglvh',
                form.current,
                'WcTjx_hDSVUI77y2w'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setEmail('');
                    setLastName('');
                    setFirstname('');
                    setEmail('');
                    setTextarea('');
                    alert("Soon, I'll read your message! Thank You! 😊");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className='contact-form'>
            <form ref={form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='lastname'
                    placeholder='Lastname'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    type='text'
                    name='firstname'
                    placeholder='Firstname'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    required
                />
                <textarea
                    name='message'
                    rows='9'
                    cols='70'
                    maxLength='500'
                    minLength='10'
                    required
                    value={textarea}
                    onChange={(e) => setTextarea(e.target.value)}
                    placeholder='Write your message here'></textarea>

                <button type='submit'>Send</button>
            </form>

            <SocialNetwork />
        </div>
    );
};

export default ContactForm;
