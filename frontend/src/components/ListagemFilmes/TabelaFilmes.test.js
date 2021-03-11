import React from 'react';

import TabelaFilmes from './TabelaFilmes';

import { wrapperFilmesContext } from '../../util/testHelper';

describe('Componente TabelaFilmes', () => {
    let wrapper;

    beforeEach(() => {
        const props = {};
        wrapper = wrapperFilmesContext(<TabelaFilmes />, props);
    });

    test('Se renderiza normalmente', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});