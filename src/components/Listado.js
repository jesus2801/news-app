import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const Listado = ({news}) => {
  console.log(news);
  if (news) {
    return (
      <div className="row">
        {news.map((notice, index) => (
          <Noticia key={index} notice={notice} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

Listado.propTypes = {
  news: PropTypes.array.isRequired,
};

export default Listado;
