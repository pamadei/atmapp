import withdrawMoney from './withdrawMoney'

// mock

const [amountToWithdrawMock, notesAvailableMock] = [20, { 5: 4,
  10: 15,
  20: 7}]

describe('Withdraw Money', () => {

  test('should return an object', () => {
    expect(typeof withdrawMoney(amountToWithdrawMock, notesAvailableMock)).toBe('object')
  });


});