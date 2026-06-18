import {expect, test, describe} from 'vitest'

import operaLocation from '../src/index'

describe('opera-location2 module', () => {
  it('returns string or null', () => {
    const res = operaLocation()

    expect(typeof res === 'string' || res === null).toBe(true)
  })
})
