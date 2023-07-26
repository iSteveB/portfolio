import { useRef } from 'react';
import SocialNetwork from './SocialNetwork';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

    const form = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        emailjs.sendForm('service_5wk0o1s', 'template_5agglvh', form.current, 'WcTjx_hDSVUI77y2w')
        .then((result) => {
            console.log(result.text);
            alert('Soon, I\'ll read your message! Thank You! 😊')
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='contact-form'>
            <form ref={form} onSubmit={handleSubmit}>
                <input type="text" name='lastname' placeholder='Lastname' required />
                <input type="text" name='firstname' placeholder='Firstname'required />
                <input type="email" name='email' placeholder='Email' required />
                <textarea name="message" rows="9" cols="70" maxLength="500" minLength="10" required placeholder="Write your message here"></textarea>

                <button type="submit">Send</button>
            </form>

            <SocialNetwork />
        </div>
    );
};

export default ContactForm;