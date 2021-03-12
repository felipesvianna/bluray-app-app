import {
    GET_FILMES,
    ADICIONAR_FILME,
    EXCLUIR_FILME,
    EDITAR_DADOS_FILME,
    BUSCAR_FILMES,
    BUSCAR_FILMES_DIRETOR,
    EXIBIR_FLASH,
    NAO_EXIBIR_FLASH
} from '../actionTypes';

import { initialStateTest } from '../util/testHelper';

import FilmesReducer from './FilmesReducer';

describe('Actions de FilmeReducer', () => {

    const payloadTeste = {
        id: 1,
        titulo: 'The Godfather',
        anoLancamento: 1972,
        direcao: 'Francis Ford Coppola',
        sinopse: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
        avaliacao: '5'
    };

    test('action de Adicionar Filme', () => {
        const action = {
            type: ADICIONAR_FILME,
            payload: payloadTeste
        };

        const stateEsperado = {
            ...initialStateTest,
            listaDeFilmes: [
                payloadTeste
            ],
        };

        expect(FilmesReducer(initialStateTest, action)).toEqual(stateEsperado);
    });

    test('action de Editar Filme', () => {

        const initialStateEditarFilme = {
            ...initialStateTest,
            listaDeFilmes: [
                {
                    id: 1,
                    titulo: 'The Godfather',
                    anoLancamento: '1972',
                    direcao: 'Francis Ford Coppola',
                    sinopse: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
                    avaliacao: 5
                }
            ]
        };

        const payloadTesteEditar = {
            id: 1,
            titulo: 'The Godfather1',
            anoLancamento: 19721,
            direcao: 'Francis Ford Coppola1',
            sinopse: 'Removendo sinopse',
            avaliacao: '4'
        };

        const action = {
            type: EDITAR_DADOS_FILME,
            payload: payloadTesteEditar
        };

        const stateEsperado = {
            ...initialStateEditarFilme,
            listaDeFilmes: [payloadTesteEditar]
        };

        expect(FilmesReducer(initialStateEditarFilme, action)).toEqual(stateEsperado);
    });

    test('action de Excluir Filme', () => {

        const instanciaFilme = {
            id: 1,
            titulo: 'The Godfather',
            anoLancamento: '1972',
            direcao: 'Francis Ford Coppola',
            sinopse: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
            avaliacao: 5
        };

        const initialStateExcluirFilme = {
            ...initialStateTest,
            listaDeFilmes: [
                instanciaFilme
            ]
        };

        const action = {
            type: EXCLUIR_FILME,
            payload: instanciaFilme
        };

        const stateEsperado = {
            ...initialStateTest,
            listaDeFilmes: []
        };

        expect(FilmesReducer(initialStateExcluirFilme, action)).toEqual(stateEsperado);
    });

    test('action getFilmes', () => {

        const instanciaDeLista = [
            { id: 1, titulo: 'The Godfather', anoLancamento: '1972', direcao: 'Francis Ford Coppola', sinopse: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.', avaliacao: 5 },
            { id: 2, titulo: 'Get Out', anoLancamento: '2017', direcao: 'Jordan Peele', sinopse: 'Chris, an African-American man, decides to visit his Caucasian girlfriends parents during a weekend getaway.Although they seem normal at first, he is not prepared to experience the horrors ahead.', avaliacao: 5 },
            { id: 3, titulo: 'Avengers: Endgame', anoLancamento: '2019', direcao: 'Joe Russo', sinopse: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.', avaliacao: 4 }
        ];

        const action = {
            type: GET_FILMES,
            payload: instanciaDeLista
        };

        const stateEsperado = {
            ...initialStateTest,
            tituloTabela: 'Todos os filmes',
            listaDeFilmes: instanciaDeLista
        };

        expect(FilmesReducer(initialStateTest, action)).toEqual(stateEsperado);
    });

    test('action getFilmesDiretor', () => {

        const instanciaDeLista = [
            { id: 1, titulo: 'The Godfather', anoLancamento: '1972', direcao: 'Francis Ford Coppola', sinopse: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.', avaliacao: 5 },
            { id: 2, titulo: 'Get Out', anoLancamento: '2017', direcao: 'Jordan Peele', sinopse: 'Chris, an African-American man, decides to visit his Caucasian girlfriends parents during a weekend getaway.Although they seem normal at first, he is not prepared to experience the horrors ahead.', avaliacao: 5 },
            { id: 3, titulo: 'Avengers: Endgame', anoLancamento: '2019', direcao: 'Joe Russo', sinopse: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.', avaliacao: 4 }
        ];

        // Filme a ser encontrado
        const payloadTeste = 'Jordan Peele';

        const initialStateBuscaDiretor = {
            ...initialStateTest,
            listaDeFilmes: instanciaDeLista
        };

        const action = {
            type: BUSCAR_FILMES_DIRETOR,
            payload: payloadTeste
        };

        const stateEsperado = {
            ...initialStateBuscaDiretor,
            tituloTabela: 'Todos os filmes dirigidos por ' + payloadTeste,
            listaDeFilmes: [
                { id: 2, titulo: 'Get Out', anoLancamento: '2017', direcao: 'Jordan Peele', sinopse: 'Chris, an African-American man, decides to visit his Caucasian girlfriends parents during a weekend getaway.Although they seem normal at first, he is not prepared to experience the horrors ahead.', avaliacao: 5 },
            ]
        };

        expect(FilmesReducer(initialStateBuscaDiretor, action)).toEqual(stateEsperado);
    });

    test('action buscar filme', () => {

        const instanciaDeLista = [
            { id: 1, titulo: 'The Godfather', anoLancamento: '1972', direcao: 'Francis Ford Coppola', sinopse: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.', avaliacao: 5 },
            { id: 2, titulo: 'Get Out', anoLancamento: '2017', direcao: 'Jordan Peele', sinopse: 'Chris, an African-American man, decides to visit his Caucasian girlfriends parents during a weekend getaway.Although they seem normal at first, he is not prepared to experience the horrors ahead.', avaliacao: 5 },
            { id: 3, titulo: 'Avengers: Endgame', anoLancamento: '2019', direcao: 'Joe Russo', sinopse: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.', avaliacao: 4 }
        ];

        const resultadoBusca = [
            { id: 2, titulo: 'Get Out', anoLancamento: '2017', direcao: 'Jordan Peele', sinopse: 'Chris, an African-American man, decides to visit his Caucasian girlfriends parents during a weekend getaway.Although they seem normal at first, he is not prepared to experience the horrors ahead.', avaliacao: 5 },
        ];

        const payloadTeste = {
            stringBusca: 'Get', filmesEncontrados: resultadoBusca
        };

        const initialStateBusca = {
            ...initialStateTest,
            listaDeFilmes: instanciaDeLista
        };

        const action = {
            type: BUSCAR_FILMES,
            payload: payloadTeste
        };

        const stateEsperado = {
            ...initialStateBusca,
            tituloTabela: 'Resultado da busca para "' + payloadTeste.stringBusca + '"',
            listaDeFilmes: payloadTeste.filmesEncontrados
        };

        expect(FilmesReducer(initialStateBusca, action)).toEqual(stateEsperado);
    });

    test('action de exibir flash', () => {
        const action = {
            type: EXIBIR_FLASH,
            payload: { tipo: 'sucesso', mensagem: 'Título incluido com sucesso!' }
        };

        const stateEsperado = {
            ...initialStateTest,
            exibirFlash: true,
            tipoFlash: 'sucesso',
            mensagemFlash: 'Título incluido com sucesso!'
        };

        expect(FilmesReducer(initialStateTest, action)).toEqual(stateEsperado);
    });

    test('action de nao exibir flash', () => {
        const action = {
            type: NAO_EXIBIR_FLASH
        };

        const stateEsperado = {
            ...initialStateTest,
            exibirFlash: false,
            tipoFlash: '',
            mensagemFlash: ''
        };

        expect(FilmesReducer(initialStateTest, action)).toEqual(stateEsperado);
    });
});