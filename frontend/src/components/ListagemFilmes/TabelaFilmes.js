import React, { useContext } from 'react';

import FilmesContext from '../../context/FilmesContext';

import ItemListaFilme from './ItemListaFilme';

function TabelaFilmes() {
    const filmesContext = useContext(FilmesContext);
    const { tituloTabela, listaDeFilmes } = filmesContext;

    if (listaDeFilmes.length === 0) {
        return <h3 className="text-lg leading-6 font-medium text-gray-900 ml-8">
            Não há títulos cadastrados.
        </h3>;
    }

    return (
        <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 ml-8">
                {tituloTabela}
            </h3>

            <br />

            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mx-6">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Título
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Ano de lançamento
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Sinopse
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Diretor
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Avaliação
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only ">Excluir</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {listaDeFilmes ? listaDeFilmes.map((titulo) => <ItemListaFilme key={titulo.id} dadosFilme={titulo} />) : null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabelaFilmes;
