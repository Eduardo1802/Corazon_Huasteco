import React, { useState } from "react";

const LanguageSwitcher = ({ onChange }) => {
  const [language, setLanguage] = useState("es");

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onChange(selectedLanguage);
  };

  return (
    <select value={language} onChange={handleChange} aria-label="cambiar lenguaje">
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;
