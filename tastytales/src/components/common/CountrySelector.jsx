import React, { useState, useEffect } from 'react';

const CountrySelector = ({ selectedNationality, onNationalityChange }) => {
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    const fetchNationalities = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/independent?status=true");
        const data = await response.json();

        const extractedNationalities = data
          .map((country) => country.demonyms?.eng?.m || country.name.common)
          .filter(Boolean);

        const uniqueNationalities = [...new Set(extractedNationalities)].sort();
        setNationalities(uniqueNationalities);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchNationalities();
  }, []);

  const handleChange = (e) => {
    onNationalityChange(e.target.value);
  };

  return (
    <section className='mb-4'>
      <legend>Nationality</legend>
      <input
        list="nationalities"
        className='form-control mt-2'
        placeholder="Type nationality..."
        value={selectedNationality}
        onChange={handleChange}
      />
      <datalist id="nationalities">
        {nationalities.map((nat) => (
          <option key={nat} value={nat} />
        ))}
      </datalist>
    </section>
  );
};

export default CountrySelector;
