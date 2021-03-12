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
            <div className="w-4/5 mx-auto py-6">
                <Header submitBusca />
                <TabelaFilmes />
            </div>
        </>
    )
}

export default ListarFilmesDirecao;

