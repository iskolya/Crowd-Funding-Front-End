import React from 'react';
import ContactForm from '../Components/Contact/form/ContactForm';
import ContactInfo from '../Components/Contact/info/ContactInfo';
import ContactHelp from '../Components/Contact/questions/ContactHelp';
import './ContactPage.css'



const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-help-form">
                <div className="contactpage-form">
                    <ContactForm />
                </div>
                <div className="contactpage-help">
                    <ContactHelp />
                </div>
            </div>
            <div className="contact-info">
                <ContactInfo />
            </div>
        </div>
    );
};


export default ContactPage;