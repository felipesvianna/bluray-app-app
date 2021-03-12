import React, { useContext, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Header from './Header';
import TabelaFilmes from './TabelaFilmes';

import FilmesContext from '../../context/FilmesContext';

function ListarFilmesBusca() {
    const filmesContext = useContext(FilmesContext);
    const { buscarFilmesNome } = filmesContext;

    const data = useLocation();
    const stringBusca = data.state.stringBusca;

    useEffect(() => {
        buscarFilmesNome(stringBusca);
    }, []);

    return (
        <>
            <div className="w-4/5 mx-auto py-6">
                <Header />
                <TabelaFilmes />
            </div>
        </>
    )
}

export default ListarFilmesBusca;

