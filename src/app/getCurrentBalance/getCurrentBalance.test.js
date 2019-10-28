import {getCurrentBalance} from './getCurrentBalance'

describe('getCurrentBalance', () => {

  test('API call that should return a current Balance given a PIN', async () => {
    const pinMock = '1111';
    const currentBalanceMock = await getCurrentBalance(pinMock);
    expect(currentBalanceMock).toEqual(220);
  });

  test('API call that should return number', async () => {
    const pinMock = '1111';
    const currentBalanceMock = await getCurrentBalance(pinMock);
    expect(typeof currentBalanceMock).toBe('number');
  })


})