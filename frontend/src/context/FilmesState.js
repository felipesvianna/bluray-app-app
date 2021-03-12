import React, { useReducer } from 'react';

import filmesReducer from './FilmesReducer';
import FilmesContext from './FilmesContext';

import createClientAxios from '../util/axios';

import {
    GET_FILMES,
    ADICIONAR_FILME,
    BUSCAR_FILMES_DIRETOR,
    BUSCAR_FILMES,
    EXIBIR_FLASH,
    NAO_EXIBIR_FLASH,
    EDITAR_DADOS_FILME,
    EXCLUIR_FILME
} from '../actionTypes';

function FilmesState(props) {
    const { children } = props;

    const initialState = {
        listaDeFilmes: [],
        exibirFlash: false,
        tipoFlash: '',
        mensagemFlash: '',
        tituloTabela: 'Todos os Filmes'
    };

    const [state, dispatch] = useReducer(filmesReducer, initialState);

    async function getFilmes() {
        try {
            const response = await createClientAxios.get(
                `/api/${process.env.REACT_APP_API_VERSION}/filmes`
            );

            dispatch({ type: GET_FILMES, payload: response.data });
        } catch (err) {
            dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'erro', mensagem: 'Ocorreu um erro ao listar os filmes!' } });
        }
    }

    function getFilmesDirecao(nomeDirecao) {
        dispatch({ type: BUSCAR_FILMES_DIRETOR, payload: nomeDirecao });
    }

    async function buscarFilmesNome(stringBusca) {
        if (stringBusca) {
            try {
                const response = await createClientAxios.get(
                    `/api/${process.env.REACT_APP_API_VERSION}/filmes/search/${stringBusca}`
                );
                dispatch({ type: BUSCAR_FILMES, payload: { stringBusca, filmesEncontrados: response.data } });
            } catch (err) {
                dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'erro', mensagem: 'Ocorreu um erro ao buscar os filmes!' } });
            }
        }
    }

    async function adicionarFilme(dadosFilme) {
        try {
            const response = await createClientAxios.post(
                `/api/${process.env.REACT_APP_API_VERSION}/filmes/`,
                { filme: dadosFilme }
            );

            dispatch({ type: ADICIONAR_FILME, payload: response.data });
            dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'sucesso', mensagem: 'Título incluido com sucesso!' } });
        } catch (err) {
            if (err.response.status === 422) {
                dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'erro', mensagem: 'Dados Inválidos! O título do filme dever ter no mínimo 2 caracteres' } });
            } else {
                dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'erro', mensagem: 'Ocorreu um erro ao cadastrar o filme!' } });
            }
        }
    }

    async function editarDadosFilme(dadosFilme) {
        try {
            const response = await createClientAxios.patch(
                `/api/${process.env.REACT_APP_API_VERSION}/filmes/${dadosFilme.id}`,
                { filme: dadosFilme }
            );

            dispatch({ type: EDITAR_DADOS_FILME, payload: response });
            dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'sucesso', mensagem: 'Título alterado com sucesso!' } });
        } catch (err) {
            dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'erro', mensagem: 'Ocorreu um erro ao editar o filme!' } });
        }
    }

    async function excluirFilme(dadosFilme) {
        try {
            const response = await createClientAxios.delete(
                `/api/${process.env.REACT_APP_API_VERSION}/filmes/${dadosFilme.id}`
            );

            dispatch({ type: EXCLUIR_FILME, payload: response });
            dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'sucesso', mensagem: 'Título removido com sucesso!' } });
        } catch (err) {
            dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'erro', mensagem: 'Ocorreu um erro ao excluir o filme!' } });
        }
    }

    function fecharFlash() {
        dispatch({ type: NAO_EXIBIR_FLASH });
    }

    return (
        <FilmesContext.Provider value={{
            listaDeFilmes: state.listaDeFilmes,
            exibirFlash: state.exibirFlash,
            tipoFlash: state.tipoFlash,
            mensagemFlash: state.mensagemFlash,
            tituloTabela: state.tituloTabela,
            adicionarFilme,
            editarDadosFilme,
            excluirFilme,
            getFilmes,
            getFilmesDirecao,
            buscarFilmesNome,
            fecharFlash
        }}>
            {children}
        </FilmesContext.Provider >
    )
}

export default FilmesState;
