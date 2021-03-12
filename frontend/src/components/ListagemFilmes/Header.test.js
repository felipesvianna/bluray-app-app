import React from 'react';

import { wrapperFilmesContext } from '../../util/testHelper';

import Header from './Header';

describe('Componente Header', () => {
    let wrapper;

    beforeEach(() => {
        const props = { value: {} };
        wrapper = wrapperFilmesContext(<Header />, props, 'mount');
    });

    test('Se renderiza normalmente', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    test('Se botao Adicionar Filme existe', () => {
        expect(wrapper.find('#btn-adicionar-filme').length).toEqual(1);
    });

    test('Se botao Todos os Filmes existe', () => {
        expect(wrapper.find('#btn-todos-os-filmes').length).toEqual(1);
    });

    describe('Form de busca', () => {
        test('Se exite input', () => {
            expect(wrapper.find('#input-busca').length).toEqual(1);
        });

        test('Se botao submit existe', () => {
            expect(wrapper.find('#input-submit').length).toEqual(1);
        });

        test('Se uma funcao e chamada ao submeter o form', () => {
            const submitMock = jest.fn();

            const props = { value: { buscarFilmesNome: submitMock } };
            wrapper = wrapperFilmesContext(<Header />, props, 'mount');

            expect(submitMock.mock.calls.length).toEqual(0);
            wrapper.find('form').simulate('submit');
            expect(submitMock.mock.calls.length).toEqual(1);
        });
    });


});