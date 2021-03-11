import React, { useContext, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Header from './Header';
import TabelaFilmes from './TabelaFilmes';

import FilmesContext from '../../context/FilmesContext';

function ListarFilmesDirecao() {
    const filmesContext = useContext(FilmesContext);
    const { getFilmesDirecao } = filmesContext;

    const data = useLocation();
    const nomeDirecao = data.state;

    useEffect(() => {
        getFilmesDirecao(nomeDirecao);
    }, []);

    return (
        <>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Header submitBusca />
                <TabelaFilmes />
            </div>
        </>
    )
}

export default ListarFilmesDirecao;

