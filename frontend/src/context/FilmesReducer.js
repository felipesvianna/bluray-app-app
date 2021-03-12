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

export default (state, action) => {
    switch (action.type) {
        case GET_FILMES:
            return {
                ...state,
                tituloTabela: 'Todos os filmes',
                listaDeFilmes: action.payload,
            };
        case ADICIONAR_FILME:
            return {
                ...state,
                listaDeFilmes: [
                    action.payload,
                    ...state.listaDeFilmes,
                ]
            };
        case EXIBIR_FLASH:
            return {
                ...state,
                exibirFlash: true,
                tipoFlash: action.payload.tipo,
                mensagemFlash: action.payload.mensagem
            };
        case NAO_EXIBIR_FLASH:
            return {
                ...state,
                exibirFlash: false,
                tipoFlash: '',
                mensagemFlash: ''
            };
        case EDITAR_DADOS_FILME:
            return {
                ...state,
                listaDeFilmes: state.listaDeFilmes.map((filme) =>
                    filme.id === action.payload.id ? action.payload : filme
                ),
            };
        case EXCLUIR_FILME:
            return {
                ...state,
                listaDeFilmes: state.listaDeFilmes.filter((filme) =>
                    filme.id !== action.payload.id
                ),
            };
        case BUSCAR_FILMES_DIRETOR:
            return {
                ...state,
                tituloTabela: 'Todos os filmes dirigidos por ' + action.payload,
                listaDeFilmes: state.listaDeFilmes.filter((filme) =>
                    filme.direcao === action.payload
                ),
            };
        case BUSCAR_FILMES:
            return {
                ...state,
                tituloTabela: 'Resultado da busca para "' + action.payload.stringBusca + "\"",
                listaDeFilmes: action.payload.filmesEncontrados
            };
        default:
            return state;
    };
};