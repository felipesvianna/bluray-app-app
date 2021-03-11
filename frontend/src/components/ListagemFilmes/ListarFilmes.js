import React, { useContext, useEffect } from 'react';

import Header from './Header';
import TabelaFilmes from './TabelaFilmes';

import FilmesContext from '../../context/FilmesContext';

import FlashMensagem from '../FlashMensagem';

function ListarFilmes() {
    const filmesContext = useContext(FilmesContext);
    const { getFilmes, exibirFlash } = filmesContext;

    useEffect(() => {
        getFilmes();
    }, []);

    return (
        <>{exibirFlash ?
            <FlashMensagem />
            : null}
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Header submitBusca />
                <TabelaFilmes />
            </div>
        </>
    )
}

export default ListarFilmes

