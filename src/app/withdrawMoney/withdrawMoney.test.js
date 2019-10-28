import withdrawMoney from './withdrawMoney';

let [amountToWithdrawMock, notesAvailableMock] = [140, {
  5: 4,
  10: 15,
  20: 7
}]

describe('Withdraw Money', () => {

  test('should return an object which contains notesAvailable & notesToWithdraw for a withdraw of £310 - notesAvailable should be 0 and notesToWithdraw equal to total number of notes in the ATM.', () => {
    [amountToWithdrawMock, notesAvailableMock] = [310, {
      5: 4,
      10: 15,
      20: 7
    }]
    const resultOpsMock = withdrawMoney(amountToWithdrawMock, notesAvailableMock);
    expect(resultOpsMock.notesAvailable).toEqual({
      5: 0,
      10: 0,
      20: 0
    })
    expect(resultOpsMock.notesToWithdraw).toEqual({
      5: 4,
      10: 15,
      20: 7
    })
  });

  test('should return an object which contains notesAvailable & notesToWithdraw for a withdraw of £140.', () => {
    [amountToWithdrawMock, notesAvailableMock] = [140, {
      5: 4,
      10: 15,
      20: 7
    }]
    const resultOpsMock = withdrawMoney(amountToWithdrawMock, notesAvailableMock);
    expect(resultOpsMock.notesAvailable).toEqual({
      5: 0,
      10: 11,
      20: 3
    })
    expect(resultOpsMock.notesToWithdraw).toEqual({
      5: 4,
      10: 4,
      20: 4
    })
  });

  test('should return an object which contains notesAvailable & notesToWithdraw for a withdraw of £50.', () => {
    [amountToWithdrawMock, notesAvailableMock] = [50, {
      5: 0,
      10: 11,
      20: 3
    }]
    const resultOpsMock = withdrawMoney(amountToWithdrawMock, notesAvailableMock);
    expect(resultOpsMock.notesAvailable).toEqual({
      5: 0,
      10: 8,
      20: 2
    })
    expect(resultOpsMock.notesToWithdraw).toEqual({
      10: 3,
      20: 1
    })
  });

  test('should return an object which contains notesAvailable & notesToWithdraw for a withdraw of £90.', () => {
    [amountToWithdrawMock, notesAvailableMock] = [90, {
      5: 0,
      10: 8,
      20: 2
    }]
    const resultOpsMock = withdrawMoney(amountToWithdrawMock, notesAvailableMock);
    expect(resultOpsMock.notesAvailable).toEqual({
      5: 0,
      10: 3,
      20: 0
    })
    expect(resultOpsMock.notesToWithdraw).toEqual({
      10: 5,
      20: 2
    })
  });

  test('should return an object', () => {
    expect(typeof withdrawMoney(amountToWithdrawMock, notesAvailableMock)).toBe('object')
  });

  test('should return an object which contains notesAvailable ', () => {
    const resultOpsMock = withdrawMoney(amountToWithdrawMock, notesAvailableMock);
    expect(typeof resultOpsMock.notesAvailable).toBe('object')
  });

  test('should return an object which contains notesToWithdraw ', () => {
    const resultOpsMock = withdrawMoney(amountToWithdrawMock, notesAvailableMock);
    expect(typeof resultOpsMock.notesToWithdraw).toBe('object')
  });

});