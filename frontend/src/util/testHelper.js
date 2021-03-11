import { BrowserRouter, Route } from "react-router-dom";
import { shallow, mount } from 'enzyme';

import FilmesState from '../context/FilmesState';
import FilmesContext from '../context/FilmesContext';

export const initialStateTest = {
    listaDeFilmes: [],
    exibirFlash: false,
    tipoFlash: '',
    mensagemFlash: '',
    tituloTabela: ''
};

export function wrapperFilmesContext(ui, providerProps, tipoMontagem = 'shallow') {
    if (tipoMontagem === 'shallow') {
        return shallow(
            <FilmesState>
                <BrowserRouter>
                    <Route>
                        <FilmesContext.Provider {...providerProps}>{ui}</FilmesContext.Provider>
                    </Route>
                </BrowserRouter>
            </FilmesState>
        )
    }

    if (tipoMontagem === 'mount') {
        return mount(
            <FilmesState>
                <BrowserRouter>
                    <Route>
                        <FilmesContext.Provider {...providerProps}>{ui}</FilmesContext.Provider>
                    </Route>
                </BrowserRouter>
            </FilmesState>
        )
    }

};

