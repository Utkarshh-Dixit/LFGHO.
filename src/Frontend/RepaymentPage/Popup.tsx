// Popup.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';

interface PopupProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onRequestClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    // Perform your submit logic here with inputValue
    console.log('Submitted:', inputValue);
    // Close the popup
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false} style={modalStyles}>
      <div style={{display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',}}>
        <button style={closeButtonStyles} onClick={onRequestClose}>
          X
        </button>
        <h2>Popup Window</h2>
        <label>
          Input:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </Modal>
  );
};

const modalStyles = {
  content: {
    width: '300px', // Adjust the width as needed
    margin: 'auto', // Center the modal horizontally
  },
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const closeButtonStyles = {
  alignSelf: 'flex-end',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  fontSize: '1.5em',
};

export default Popup;
