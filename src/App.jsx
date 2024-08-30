import { useState } from 'react';
import Toaster from './Toaster';
import './App.css'; // Import the CSS file for buttons

function App() {
  const [showToaster, setShowToaster] = useState(false);
  const [toasterKey, setToasterKey] = useState(0);
  const [toasterMessage, setToasterMessage] = useState('');
  const [toasterType, setToasterType] = useState('success');

  const handleSubmit = (name) => {
    let message;
    let type;
    switch (name) {
      case 'Success':
        message = 'Your action was successful!';
        type = 'success';
        break;
      case 'Error':
        message = 'An error occurred!';
        type = 'error';
        break;
      case 'Failed':
        message = 'The action failed!';
        type = 'failed';
        break;
      case 'Not Complete':
        message = 'Action not completed!';
        type = 'notComplete';
        break;
      default:
        message = 'Unknown action!';
        type = 'success';
    }
    setToasterMessage(message);
    setToasterType(type);
    setShowToaster(true);
    setToasterKey((prevKey) => prevKey + 1);
  };

  const handleClose = () => {
    setShowToaster(false);
  };

  const Button = [
    { name: 'Success', id: 1 },
    { name: 'Failed', id: 2 },
    { name: 'Not Complete', id: 3 },
    { name: 'Error', id: 4 },
  ];

  const getButtonClass = (name) => {
    switch (name) {
      case 'Success':
        return 'success';
      case 'Error':
        return 'error';
      case 'Failed':
        return 'failed';
      case 'Not Complete':
        return 'notComplete';
      default:
        return '';
    }
  };

  return (
    <>
      {Button.map((item) => (
        <button
          key={item.id}
          className={getButtonClass(item.name)}
          onClick={() => handleSubmit(item.name)}
        >
          {item.name}
        </button>
      ))}
      {showToaster && (
        <Toaster
          key={toasterKey}
          message={toasterMessage}
          type={toasterType}
          duration={3000}
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default App;
