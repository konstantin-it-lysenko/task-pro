import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';

export const CustomBackground = ({ onSelectCustomBackground }) => {
  const [customBackground, setCustomBackground] = useState(null);
  const cusomId = nanoid();

  const handleFileChange = event => {
    const file = event.target.files[0];
    setCustomBackground(file);
  };

  const handleUpload = () => {
    if (customBackground) {
      onSelectCustomBackground(customBackground);
    }
  };

  return (
    <label>
      <input
        type="radio"
        name="background"
        value={cusomId}
        checked={cusomId}
        onChange={handleFileChange}
      />
      <label>
        <input type="file" name="background" />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </label>
    </label>
  );
};
