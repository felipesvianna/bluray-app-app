import { shallow, mount } from 'enzyme';
import { BrowserRouter, Route } from "react-router-dom";

import FormDadosFilme from './FormDadosFilme';

describe('Componente FormDadosFilme', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FormDadosFilme />);
    });

    test('Se renderiza normalmente', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    test('Se input Titulo do Filme existe', () => {
        expect(wrapper.find('#titulo-filme').length).toEqual(1);
    });

    test('Se input Ano de lancamento existe', () => {
        expect(wrapper.find('#ano-lancamento-filme').length).toEqual(1);
    });

    test('Se input Direcao existe', () => {
        expect(wrapper.find('#direcao-filme').length).toEqual(1);
    });

    test('Se textarea Sinopse existe', () => {
        expect(wrapper.find('#sinopse-filme').length).toEqual(1);
    });

    test('Se input Avaliacao existe', () => {
        expect(wrapper.find('#avaliacao-filme').length).toEqual(1);
    });

    test('Se botao Cancelar existe', () => {
        const button = wrapper.find('.btnCancelar');
        expect(button.text()).toBe('Voltar');
    });

    test('Se botao btnSubmit existe', () => {
        expect(wrapper.find('.btnSubmit').length).toEqual(1);
    });

    test('Se uma funcao e chamada ao submeter o form', () => {
        const submitMockFn = jest.fn();

        wrapper = mount(
            <BrowserRouter>
                <Route>
                    <FormDadosFilme submitDadosFormFilme={submitMockFn} />
                </Route>
            </BrowserRouter>
        );

        expect(submitMockFn.mock.calls.length).toEqual(0);
        wrapper.find('form').simulate('submit');
        expect(submitMockFn.mock.calls.length).toEqual(1);
    });
});