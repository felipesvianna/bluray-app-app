import { shallow } from 'enzyme';

import FlashMensagem from './FlashMensagem';

import { wrapperFilmesContext } from '../util/testHelper';

describe('Componente FlashMensagem', () => {
    let wrapper;
    beforeEach(() => {
        const props = {};
        wrapper = wrapperFilmesContext(<FlashMensagem />, props);
    });
    test('Se renderiza normalmente', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});
