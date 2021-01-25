import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorie }) => {

  const [inputValue, setInputValue] = useState('');
  
  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2) {
      setCategorie( [inputValue] );
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>{ inputValue }</h1>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleChangeInputValue }
      />
    </form>
  )
};

AddCategory.propTypes = {
  setCategorie: PropTypes.func.isRequired,
};