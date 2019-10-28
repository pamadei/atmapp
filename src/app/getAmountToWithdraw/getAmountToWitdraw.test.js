import getAmountToWitdraw from './getAmountToWitdraw'

const notesMock = {
  5: 4,
  10: 15,
  20: 7
}

describe('getAmountToWitdraw', () => {
  test('given an object of notes should return a total amount', () =>{
    expect(getAmountToWitdraw(notesMock)).toEqual(310)
  })

  test('given an object of notes should return number amount', () =>{
    expect(typeof getAmountToWitdraw(notesMock)).toBe('number')
  })

})