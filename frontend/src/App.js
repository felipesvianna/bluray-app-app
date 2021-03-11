import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListarFilmes from './components/ListagemFilmes/ListarFilmes';
import ListarFilmesDirecao from './components/ListagemFilmes/ListarFilmesDirecao';
import ListarFilmesBusca from './components/ListagemFilmes/ListarFilmesBusca';
import AdicionarFilme from './components/AdicionarFilme';
import EditarFilme from './components/EditarFilme';

import FilmesState from './context/FilmesState';



function App() {
  return (

    <FilmesState>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListarFilmes} />
          <Route exact path="/adicionar-filme" component={AdicionarFilme} />
          <Route exact path="/editar-filme" component={EditarFilme} />
          <Route exact path="/busca-filme-direcao" component={ListarFilmesDirecao} />
          <Route exact path="/busca-filme" component={ListarFilmesBusca} />
        </Switch>
      </BrowserRouter>
    </FilmesState>

  );
}

export default App;
