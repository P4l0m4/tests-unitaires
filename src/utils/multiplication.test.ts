import { describe, it, expect } from 'vitest'
import { multiplication } from './multiplication'

describe('multiplication', () => {
  it.each([
    { number: 0, expectedResult: 0 },
    { number: 1, expectedResult: 2 },
    { number: 2, expectedResult: 4 },
    { number: 4, expectedResult: 8 },
    { number: 8, expectedResult: 16 }
  ])(
    'should return multiplication($number) --> expected $expectedResult',
    ({ number, expectedResult }) => {
      const result = multiplication(number)
      expect(result).toEqual(expectedResult)
    }
  )
})
