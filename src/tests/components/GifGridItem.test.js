import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Sui Test GifGridItem', () => {

  const title = 'Titulo';
  const url = 'http://localhost:algo.jpg';
  const wrapper = shallow(
    <GifGridItem
      title={title}
      url={url}
    />
  );

  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be render title correctly', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  })

  test('should be render correctly props img', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should be have class animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.props('className').className;
    expect(className.includes('animate__fadeIn')).toBe(true);
  })
  
  
  
  
});
