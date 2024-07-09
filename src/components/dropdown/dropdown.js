import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedService, setSelectedService] = useState('Select A Service');

  const handleSelectionChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <div className='dropdown-content'>
      <select onChange={handleSelectionChange}>
        <option value="AUA Service">AUA Service</option>
        <option value="KUA Service">KUA Service</option>
        <option value="PAN Service">PAN Service</option>
        <option value="Aadhar-OTP Service">Aadhar-OTP Service</option>
      </select>
      {/* <p id='content'>{selectedService}</p> */}
    </div>
  );
};

export default Dropdown;
