import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Sui test GifGrid Component', () => {

  const categorie= 'Death Note';
  
  test('should be render correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid categorie={categorie} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be render elements mocked', () => {
    const gifs = [{
      id: 'ABC',
      url: 'http://localhost/ciualquier/cosa.jpg',
      title: 'Cualquier cosa'
    }, {
      id: 'ABC',
      url: 'http://localhost/ciualquier/cosa.jpg',
      title: 'Cualquier cosa'
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid categorie={categorie} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });



})
