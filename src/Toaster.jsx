import React, { useState, useEffect } from 'react';

const Toaster = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    console.log('sdsdfsd');
    onClose();
  };

  return (
    <div
      className={`toaster ${type} ${visible ? 'show' : 'hide'}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {message}
      {/* <div onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div> */}
    </div>
  );
};

export default Toaster;
