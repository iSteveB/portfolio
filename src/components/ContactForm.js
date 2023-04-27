import React from 'react';
import SocialNetwork from './SocialNetwork';

const handleSubmit = (e)=>{
    e.preventDefault()
    alert("Message envoyé ! À très vite ! 😊")
}

const ContactForm = () => {
    return (
        <div className='contact-form'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='last-name' placeholder='Nom' required />
                <input type="text" name='first-name' placeholder='Prénom'required />
                <input type="email" name='email' placeholder='E-mail' required />
                <textarea rows="9" cols="70" maxLength="500" minLength="10" required placeholder='Get Ready For the NEXT BATTLE !'></textarea>

                <button type="submit">Envoyer</button>
            </form>

            <SocialNetwork />
        </div>
    );
};

export default ContactForm;