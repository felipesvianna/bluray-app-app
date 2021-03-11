import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter, Route } from "react-router-dom";

import AdicionarFilme from './AdicionarFilme';
import FormDadosFilme from './FormDadosFilme';

import { wrapperFilmesContext } from '../util/testHelper';

describe('Componente Adicionar Filme', () => {
    let wrapper;

    beforeEach(() => {
        const props = {
            adicionarFilme: jest.fn()
        };
        wrapper = wrapperFilmesContext(<AdicionarFilme />, props, 'shallow');
    });

    test('Se renderiza normalmente', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});