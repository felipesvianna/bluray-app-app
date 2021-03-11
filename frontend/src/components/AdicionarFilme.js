import React, { useContext } from 'react';

import FormDadosFilme from './FormDadosFilme';

import FilmesContext from '../context/FilmesContext';

import FlashMensagem from '../components/FlashMensagem';

function AdicionarFilme() {
    const filmesContext = useContext(FilmesContext);

    const { adicionarFilme, exibirFlash } = filmesContext;

    return (
        < div >
            { exibirFlash ?
                <FlashMensagem />
                : null}

            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Adicionar Filme
                     </h2>
                </div>
            </header>

            <FormDadosFilme submitDadosFormFilme={adicionarFilme} />
        </div >
    );
}

export default AdicionarFilme;
