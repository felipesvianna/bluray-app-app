import React, { useContext, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import FilmesContext from '../../context/FilmesContext';

function Header() {

    const filmesContext = useContext(FilmesContext);
    const { buscarFilmesNome } = filmesContext;

    const [inputValue, setInputValue] = useState('');

    const history = useHistory();

    function onChangeForm(e) {
        setInputValue(e.target.value);
    }

    function onSubmitForm(e) {
        e.preventDefault();
        buscarFilmesNome(inputValue);

        history.push({
            pathname: '/busca-filme',
            state: { stringBusca: inputValue }
        });
    }

    return (
        <div>
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between p-5">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Catálogo de BluRay/DVDs
                    </h1>
                </div>
            </header>
            <div className="lg:flex lg:items-center lg:justify-between p-5">
                <div className="mt-5 flex lg:mt-0 lg:ml-5">
                    <span className="hidden sm:block">
                        <Link to="/adicionar-filme">
                            <button type="button" id="btn-adicionar-filme" className="inline-flex items-center px-4 py-2 text-sm text-white font-semibold rounded-md bg-green-600 hover:bg-green-700">
                                Adicionar Filme
                            </button>
                        </Link>
                    </span>

                    <span className="hidden sm:block">
                        <Link to="/">
                            <button type="button" id="btn-todos-os-filmes" className="inline-flex items-center ml-4 px-4 py-2 text-sm text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700">
                                Todos os Filmes
                            </button>
                        </Link>
                    </span>
                </div>

                <span className="hidden sm:block lg:mr-5">
                    <form
                        className="flex w-full max-w-sm mx-auto space-x-3"
                        onSubmit={onSubmitForm}>
                        <input type="text" id="input-busca" className="flex-1 mt-1 p-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" value={inputValue} onChange={onChangeForm} placeholder="Insira o título de um filme" />

                        <button type="submit" id="input-submit" className="inline-flex items-center ml-4 px-4 py-2 text-sm text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700">
                            Buscar por título
                        </button>
                    </form>
                </span>
            </div>
        </div>
    )
}

export default Header;

