import { getGifs } from '../../helpers/getGif';

describe('sui test getFiftest', () => {
  test('should be return 10 elements', async() => {
    const gifs = await getGifs('One punch man');
    expect(gifs.length).toBe(10);
  })
  
})
