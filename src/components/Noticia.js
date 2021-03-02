import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';

function Noticia({notice}) {
  const {urlToImage, url, title, description, source} = notice;

  const image = urlToImage ? (
    <div className={styles['image-ctn']}>
      <img src={urlToImage} alt={title} className={styles['image']} />
    </div>
  ) : (
    <div className={`${styles['image-ctn']} ${styles['notFound']}`}></div>
  );

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}

        <div className="card-content">
          <span className={`card-content ${styles['source']}`}>{source.name}</span>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            See full news
          </a>
        </div>
      </div>
    </div>
  );
}

Noticia.propTypes = {
  notice: PropTypes.object.isRequired,
};

export default Noticia;
