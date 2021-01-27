import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Suit Test Hook UseFetchGifs', () => {
  
  test('should be return initial state values', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should be have 10 elements iin array and loading false', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  })
  
  
})
