import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

function FormDadosFilme({ dadosFilme, submitDadosFormFilme }) {

    const initialState = {
        id: '',
        titulo: '',
        anoLancamento: '',
        direcao: '',
        sinopse: '',
        avaliacao: '',
    }

    const [dadosFormFilme, setDadosFormFilme] = useState(initialState);

    useEffect(() => {
        if (dadosFilme) {
            const novoState = {
                id: dadosFilme.id,
                titulo: dadosFilme.titulo,
                anoLancamento: dadosFilme.anoLancamento,
                direcao: dadosFilme.direcao,
                sinopse: dadosFilme.sinopse,
                avaliacao: dadosFilme.avaliacao,
            };
            setDadosFormFilme(novoState);
        };
    }, [dadosFilme]);

    function onSubmitForm(e) {
        e.preventDefault();
        submitDadosFormFilme(dadosFormFilme);
    }

    function onChangeForm(e) {
        setDadosFormFilme({
            ...dadosFormFilme,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <form action="#" method="POST" onSubmit={onSubmitForm}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Título do Filme</label>
                                    <input type="text" name="titulo" id="titulo-filme" className="mt-1 p-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={onChangeForm} value={dadosFormFilme.titulo} />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="ano-lancamento-filme" className="block text-sm font-medium text-gray-700">Ano de Lançamento</label>
                                    <input type="text" name="anoLancamento" id="ano-lancamento-filme" className="mt-1 p-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={onChangeForm} value={dadosFormFilme.anoLancamento} />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="direcao-filme" className="block text-sm font-medium text-gray-700">Direção</label>
                                    <input type="text" name="direcao" id="direcao-filme" className="mt-1 p-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={onChangeForm} value={dadosFormFilme.direcao} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    Sinopse
                                        </label>
                                <div className="mt-1">
                                    <textarea id="sinopse-filme" name="sinopse" rows="8" className="shadow-sm border border-gray-300 p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" onChange={onChangeForm} value={dadosFormFilme.sinopse}></textarea>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="avalicao-filme" className="block text-sm font-medium text-gray-700">Avaliação</label>
                                    <input type="text" name="avaliacao" id="avaliacao-filme" className="mt-1 p-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={onChangeForm} value={dadosFormFilme.avaliacao} />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="btnSubmit inline-flex text-white text-sm items-center px-4 py-2 rounded-md bg-green-600 hover:bg-green-700">
                                {dadosFilme ? 'Salvar Alterações' : 'Salvar'}
                            </button>

                            <Link to="/">
                                <button type="button" className="btnCancelar inline-flex text-white text-sm items-center ml-4 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700">
                                    Voltar
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormDadosFilme
