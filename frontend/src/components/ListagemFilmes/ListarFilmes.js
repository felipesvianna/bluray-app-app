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
            <div className="w-4/5 mx-auto py-6">
                <Header submitBusca />
                <TabelaFilmes />
            </div>
        </>
    )
}

export default ListarFilmes

