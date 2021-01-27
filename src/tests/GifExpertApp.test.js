import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Sui Test GifExpertApp', () => {
  
  const categories = ['One punch', 'Yu Gi Oh']

  test('should be render correctly', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid'))
  });
  
  test('should be render all gifgrid categories', () => {
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
  
})
