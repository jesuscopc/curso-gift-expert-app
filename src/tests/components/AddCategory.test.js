import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Sui test AddCategoryComponent', () => {
  
  const setCategorie = jest.fn();
  let wrapper = shallow(<AddCategory setCategorie={setCategorie}/>);

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategorie={setCategorie}/>);
  });

  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should be change the textinput value', () => {
    const input = wrapper.find('input');
    const value = 'Texto cambiado'
    input.simulate('change', { target: { value: value}});
    expect(wrapper.find('input').props().value.trim()).toBe(value);
  });

  test('should be not send data form', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} } );
    expect(setCategorie).not.toHaveBeenCalled();
  })
  
  test('should be submit the form and reset the input text', () => {
    const value = 'Hunter x Hunter';
    const input = wrapper.find('input').simulate('change',{ target: { value }});
    wrapper.find('form').simulate('submit',{ preventDefault(){} });
    expect(setCategorie).toHaveBeenLastCalledWith( expect.any(Array));
    expect(input.props().value.trim()).toBe('');
  })
  
  
  
})
