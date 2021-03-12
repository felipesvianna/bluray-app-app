import axios from 'axios';

import { shallow } from 'enzyme';

import FilmesState from './FilmesState';

jest.mock('axios');

describe('Componente FilmesState', () => {
    const mensagemErro = 'Network Error';

    test('Se renderiza normalmente', () => {
        const props = {};
        const wrapper = shallow(<FilmesState props />);
        expect(wrapper.exists()).toEqual(true);
    });

    describe('Chamadas de API', () => {

        describe('testa chamadas para API da funcao getFilmes()', () => {
            const urlGetFilmes = `/api/${process.env.REACT_APP_API_VERSION}/filmes`;

            test(`se GET ${urlGetFilmes} retorna lista de filmes`, async () => {
                const data = {
                    data:
                        [
                            { id: 1, titulo: 'The Godfather', anoLancamento: '1972', direcao: 'Francis Ford Coppola', sinopse: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.', avaliacao: 5 },
                            { id: 2, titulo: 'Get Out', anoLancamento: '2017', direcao: 'Jordan Peele', sinopse: 'Chris, an African-American man, decides to visit his Caucasian girlfriends parents during a weekend getaway.Although they seem normal at first, he is not prepared to experience the horrors ahead.', avaliacao: 5 },
                            { id: 3, titulo: 'Avengers: Endgame', anoLancamento: '2019', direcao: 'Joe Russo', sinopse: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.', avaliacao: 4 }
                        ]
                };

                axios.get.mockImplementationOnce(() => Promise.resolve(data));

                await expect(axios.get(urlGetFilmes)).resolves.toEqual(data);

                expect(axios.get).toHaveBeenCalledWith(urlGetFilmes);
            });

            test(`se GET ${urlGetFilmes} retorna mensagem no caso de erro ao fazer fetch`, async () => {

                axios.get.mockImplementationOnce(() =>
                    Promise.reject(new Error(mensagemErro)),
                );

                await expect(axios.get(urlGetFilmes)).rejects.toThrow(mensagemErro);
            });
        });
    });

    describe('testa chamadas para API da funcao buscarFilmesNome()', () => {
        const urlBuscarFilmesNome = `/api/${process.env.REACT_APP_API_VERSION}/filmes/search/`;

        test(`se GET ${urlBuscarFilmesNome} retorna lista de filmes encontrados`, async () => {
            const data = {
                data:
                    [
                        { id: 2, titulo: 'Get Out', anoLancamento: '2017', direcao: 'Jordan Peele', sinopse: 'Chris, an African-American man, decides to visit his Caucasian girlfriends parents during a weekend getaway.Although they seem normal at first, he is not prepared to experience the horrors ahead.', avaliacao: 5 },
                        { id: 3, titulo: 'Avengers: Endgame', anoLancamento: '2019', direcao: 'Joe Russo', sinopse: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.', avaliacao: 4 }
                    ]
            };

            axios.get.mockImplementationOnce(() => Promise.resolve(data));

            await expect(axios.get(urlBuscarFilmesNome + 'ge')).resolves.toEqual(data);

            expect(axios.get).toHaveBeenCalledWith(urlBuscarFilmesNome + 'ge');
        });

        test(`se GET ${urlBuscarFilmesNome} retorna mensagem no caso de erro ao fazer fetch`, async () => {
            axios.get.mockImplementationOnce(() =>
                Promise.reject(new Error(mensagemErro)),
            );

            await expect(axios.get(urlBuscarFilmesNome)).rejects.toThrow(mensagemErro);
        });
    });

    describe('testa chamadas para API da funcao adicionarFilme()', () => {
        const urlAdicionarFilme = `/api/${process.env.REACT_APP_API_VERSION}/filmes/`;

        const data = { id: 3, titulo: 'Avengers: Endgame', anoLancamento: '2019', direcao: 'Joe Russo', sinopse: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.', avaliacao: 4 };

        test(`se POST ${urlAdicionarFilme} retorna filme que foi adicionado`, async () => {
            axios.post.mockImplementationOnce(() => Promise.resolve(data));

            await expect(axios.post(urlAdicionarFilme, data)).resolves.toEqual(data);
            expect(axios.post).toHaveBeenCalledWith(urlAdicionarFilme, data);
        });

        test(`se POST ${urlAdicionarFilme} retorna mensagem no caso de erro ao adicionar um filme`, async () => {
            axios.post.mockImplementationOnce(() =>
                Promise.reject(new Error(mensagemErro)),
            );

            await expect(axios.post(urlAdicionarFilme, data)).rejects.toThrow(mensagemErro);
        });
    });

    describe('testa chamadas para API da funcao editarDadosFilme()', () => {
        const urlEditarDadosFilme = `/api/${process.env.REACT_APP_API_VERSION}/filmes/`;

        const data = { id: 3, titulo: 'Avengers: Endgame', anoLancamento: '2019', direcao: 'Joe Russo', sinopse: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.', avaliacao: 4 };

        test(`se POST ${urlEditarDadosFilme} retorna objeto filme que foi alterado`, async () => {
            axios.post.mockImplementationOnce(() => Promise.resolve(data));

            await expect(axios.post(urlEditarDadosFilme + data.id, data)).resolves.toEqual(data);
            expect(axios.post).toHaveBeenCalledWith(urlEditarDadosFilme + data.id, data);
        });

        test(`se POST ${urlEditarDadosFilme} retorna mensagem no caso de erro ao editar um filme`, async () => {
            axios.post.mockImplementationOnce(() =>
                Promise.reject(new Error(mensagemErro)),
            );

            await expect(axios.post(urlEditarDadosFilme + data.id, data)).rejects.toThrow(mensagemErro);
        });
    });

    describe('testa chamadas para API da funcao excluirFilme()', () => {
        const urlExcluirFilme = `/api/${process.env.REACT_APP_API_VERSION}/filmes/`;

        const data = { id: 2, titulo: 'Get Out', anoLancamento: '2017', direcao: 'Jordan Peele', sinopse: 'Chris, an African-American man, decides to visit his Caucasian girlfriends parents during a weekend getaway.Although they seem normal at first, he is not prepared to experience the horrors ahead.', avaliacao: 5 };

        test(`se DELETE ${urlExcluirFilme} retorna objeto filme que foi excluido`, async () => {
            axios.delete.mockImplementationOnce(() => Promise.resolve(data));

            await expect(axios.delete(urlExcluirFilme + data.id)).resolves.toEqual(data);
            expect(axios.delete).toHaveBeenCalledWith(urlExcluirFilme + data.id);
        });

        test(`se DELETE ${urlExcluirFilme} retorna mensagem no caso de erro ao editar um filme`, async () => {
            axios.delete.mockImplementationOnce(() =>
                Promise.reject(new Error(mensagemErro)),
            );

            await expect(axios.delete(urlExcluirFilme + data.id)).rejects.toThrow(mensagemErro);
        });
    });
});


