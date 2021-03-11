import React, { useReducer } from 'react';

import filmesReducer from './FilmesReducer';
import FilmesContext from './FilmesContext';

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

    console.log('Lista de Filmes: ', state.listaDeFilmes);

    function getFilmes() {
        console.log('Get Filmes');
        const instanciaDeLista = [
            { id: 1, titulo: 'The Godfather', anoLancamento: '1972', direcao: 'Francis Ford Coppola', sinopse: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.', avaliacao: 5 },
            { id: 2, titulo: 'Get Out', anoLancamento: '2017', direcao: 'Jordan Peele', sinopse: 'Chris, an African-American man, decides to visit his Caucasian girlfriends parents during a weekend getaway.Although they seem normal at first, he is not prepared to experience the horrors ahead.', avaliacao: 5 },
            { id: 3, titulo: 'Avengers: Endgame', anoLancamento: '2019', direcao: 'Joe Russo', sinopse: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.', avaliacao: 4 }
        ];
        dispatch({ type: GET_FILMES, payload: instanciaDeLista });
    }

    function getFilmesDirecao(nomeDirecao) {
        console.log('Get Filmes Direcao');
        dispatch({ type: BUSCAR_FILMES_DIRETOR, payload: nomeDirecao });
    }

    function buscarFilmesNome(stringBusca) {
        console.log('Buscar filmes por: ', stringBusca);
        dispatch({ type: BUSCAR_FILMES, payload: stringBusca });
    }

    function adicionarFilme(dadosFilme) {
        console.log('Adicionar Filme: ', dadosFilme);
        dispatch({ type: ADICIONAR_FILME, payload: dadosFilme });
        dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'sucesso', mensagem: 'Título incluido com sucesso!' } });
    }

    function editarDadosFilme(dadosFilme) {
        console.log('Alterar dados do filme', dadosFilme);
        dispatch({ type: EDITAR_DADOS_FILME, payload: dadosFilme });
        dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'sucesso', mensagem: 'Título alterado com sucesso!' } });
    }

    function excluirFilme(dadosFilme) {
        console.log('Excluir filme', dadosFilme);
        dispatch({ type: EXCLUIR_FILME, payload: dadosFilme });
        dispatch({ type: EXIBIR_FLASH, payload: { tipo: 'sucesso', mensagem: 'Título removido com sucesso!' } });
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
