import ItemListaFilme from './ItemListaFilme';

import { wrapperFilmesContext } from '../../util/testHelper';

describe('Componente ItemListaFilme', () => {
    let wrapper;

    const props = {};
    test('Se renderiza normalmente', () => {
        wrapper = wrapperFilmesContext(<ItemListaFilme />, props);
        expect(wrapper.exists()).toEqual(true);
    });
});
