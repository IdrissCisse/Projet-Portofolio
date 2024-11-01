import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.scss';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ydn9f16',
        'template_yyv8ibe',
        e.target,
        'wXbYFcexVHlaELnl7'
      )
      .then((result) => {
        console.log('Email envoyé:', result.text);
        setShowPopup(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log('Erreur:', error.text);
        alert('Erreur lors de l’envoi du message. Veuillez réessayer.');
      });
  };

  return (
    <div className="contact">
      <h2 className="contact__title">Contactez-moi</h2>
      <p className="contact__description">
        Une question ? Une collaboration ? Écrivez-moi !
      </p>
      <form className="contact__form" onSubmit={sendEmail}>
        <input
          className="contact__input"
          type="text"
          name="user_name"
          placeholder="Nom"
          required
        />
        <input
          className="contact__input"
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />
        <textarea
          className="contact__textarea"
          name="message"
          placeholder="Message"
          required
        />
        <button className="contact__button" type="submit">
          Envoyer
        </button>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup__content">
            <h3>Envoyé</h3>
            <p>Merci pour vore message et à bientôt ! 👋</p>
            <button onClick={closePopup}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
