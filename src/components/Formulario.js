import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

function Formulario({saveCategory}) {
  const OPTIONS = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Business'},
    {value: 'entertainment', label: 'Entertainment'},
    {value: 'health', label: 'Health'},
    {value: 'science', label: 'Science'},
    {value: 'sports', label: 'Sports'},
    {value: 'technology', label: 'Technology'},
  ];

  //utilizar custom hook
  const [category, SelectNews] = useSelect('general', OPTIONS);

  //al hacer submit en form pasar categoria a app.js
  const searchCategory = e => {
    e.preventDefault();

    saveCategory(category);
  };

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s-12 m8 offset-m2">
        <form onSubmit={searchCategory}>
          <h2 className={styles.heading}>Find news by topics</h2>
          <SelectNews />
          <div className="input-field col s12">
            <input
              type="submit"
              value="Search"
              className={`btn-large amber darken-2 ${styles['btn-block']}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

Formulario.propTypes = {
  saveCategory: PropTypes.func.isRequired,
};

export default Formulario;
