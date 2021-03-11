import React from 'react';

import ListarFilmesDirecao from './ListarFilmesDirecao';

import { wrapperFilmesContext } from '../../util/testHelper';

describe('Componente ListarFilmesDirecao', () => {
    let wrapper;

    beforeEach(() => {
        const props = {};
        wrapper = wrapperFilmesContext(<ListarFilmesDirecao />, props);
    });

    test('Se renderiza normalmente', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});