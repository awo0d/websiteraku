import React, { useState } from 'react';
import './index.css';


const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="Footer">
      <p onClick={openModal}>Administration</p>
      {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </div>
  );
};

const Modal = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérification des informations d'identification
    if (username === 'rakuwebsite' && password === 'Passeword1') {
      // Si les informations sont correctes, vous pouvez fermer le Modal et effectuer d'autres actions nécessaires
      closeModal();
    } else {
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Admin</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Se connecter</button>
        </form>
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
};

export default Footer;
