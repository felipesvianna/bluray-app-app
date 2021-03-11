import { shallow } from 'enzyme';

import FilmesState from './FilmesState';

describe('Componente FilmesState', () => {
    test('Se renderiza normalmente', () => {
        const props = {};
        const wrapper = shallow(<FilmesState props />);
        expect(wrapper.exists()).toEqual(true);
    });
});
