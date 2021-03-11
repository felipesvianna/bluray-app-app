import React from 'react';

import EditarFilme from './EditarFilme';

import { wrapperFilmesContext } from '../util/testHelper';

describe('Componente Editar Filme', () => {
    let wrapper;

    beforeEach(() => {
        const props = {
            editarDadosFilme: jest.fn()
        };
        wrapper = wrapperFilmesContext(<EditarFilme />, props);
    });

    test('Se renderiza normalmente', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});