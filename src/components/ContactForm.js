import React from 'react';
import SocialNetwork from './SocialNetwork';

const handleSubmit = (e)=>{
    e.preventDefault()
    alert("Message envoyé !")
}

const ContactForm = () => {
    return (
        <div className='contact-form'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='last-name' placeholder='Nom' required />
                <input type="text" name='first-name' placeholder='Prénom'required />
                <input type="email" name='email' placeholder='E-mail' required />
                <textarea rows="9" cols="70" wrap maxlength="500" minlength="10" required placeholder='Get Ready For the NEXT BATTLE !'></textarea>

                <button type="submit">Envoyer</button>
            </form>

            <SocialNetwork />
        </div>
    );
};

export default ContactForm;