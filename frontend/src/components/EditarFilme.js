import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { useLocation } from "react-router-dom";

import FlashMensagem from '../components/FlashMensagem';

import FormDadosFilme from './FormDadosFilme';

import FilmesContext from '../context/FilmesContext';

function EditarFilme() {
    const [exibirModal, setExibirModal] = useState(false);
    const [redirecionar, setRedirecionar] = useState(false);

    const filmesContext = useContext(FilmesContext);
    const { editarDadosFilme, excluirFilme, exibirFlash } = filmesContext;

    const data = useLocation();
    const dadosFilme = data.state;

    function excluirTitulo() {
        // Excluir titulo
        setExibirModal(false);
        excluirFilme(dadosFilme);
        setRedirecionar(true);
    }

    if (redirecionar) {
        return <Redirect to='/' />;
    }

    return (
        <div>
            { exibirFlash ?
                <FlashMensagem />
                : null}
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between p-5">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Editar Filme
                    </h2>

                    <button type="button" className="inline-flex text-white text-sm items-center ml-4 px-4 py-2 rounded-md bg-red-600 hover:bg-red-700" onClick={() => setExibirModal(true)} >
                        Excluir Título
                    </button>
                </div>
            </header>

            <FormDadosFilme dadosFilme={dadosFilme} submitDadosFormFilme={editarDadosFilme} />

            {exibirModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => setExibirModal(false)}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                        {dadosFilme ? `Deseja realmente excluir o título ${dadosFilme.titulo}?` : 'Deseja realmente excluir este título?'}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => excluirTitulo(dadosFilme)}
                                    >
                                        Excluir
                                                    </button>
                                    <button
                                        className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => setExibirModal(false)}
                                    >
                                        Cancelar
                                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default EditarFilme;

