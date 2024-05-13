import React, { useState } from 'react';
import './index.css';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="Footer">
      <p onClick={openModal}>Réservation</p>
      {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </div>
  );
};

const Modal = ({ closeModal }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !email || !firstName || !lastName) {
      setError('Tous les champs doivent être remplis');
    } else {
      console.log(`Réservation effectuée pour ${firstName} ${lastName} le ${date} à ${time}`);
      closeModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Réservation de salle</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Réserver</button>
        </form>
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
};

export default Footer;
