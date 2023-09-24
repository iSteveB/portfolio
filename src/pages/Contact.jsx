import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact = () => {
    const { t } = useTranslation('translation');

    return (
        <motion.div
            className='contact'
        >
            <Header />
            <h1>{t('contact.letsTalk')}</h1>
            <ContactForm />
        </motion.div>
    );
};

export default Contact;
