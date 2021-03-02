import {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {
  //definir categoria y noticia
  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const APIKey = '5f7aaaddf7e4464abf423c34d83a7120';
      const corsSite = 'https://thingproxy.freeboard.io/fetch/';
      const url = `${corsSite}https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${APIKey}`;

      const response = await fetch(url);
      const data = await response.json();
      saveNews(data.articles);
    };
    consultarApi();
  }, [category]);

  return (
    <Fragment>
      <Header title="NEWS APP" />
      <div className="container white">
        <Formulario saveCategory={saveCategory} />

        <Listado news={news} />
      </div>
    </Fragment>
  );
}

export default App;
