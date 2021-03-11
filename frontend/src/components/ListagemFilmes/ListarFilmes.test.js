import { shallow } from 'enzyme';

import { wrapperFilmesContext } from '../../util/testHelper';
import ListarFilmes from './ListarFilmes';

describe('Componente ListarFilmes', () => {

    let wrapper;

    beforeEach(() => {
        const props = {};
        wrapper = wrapperFilmesContext(<ListarFilmes />, props);
    });

    test('Se renderiza normalmente', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});
