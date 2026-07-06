import {expect, test, describe} from 'vitest'

import operaLocation, {getInstallGuidance} from '../src/index'

describe('opera-location2 module', () => {
  it('returns string or null', () => {
    const res = operaLocation()

    expect(typeof res === 'string' || res === null).toBe(true)
  })

  it('getInstallGuidance renders caller-provided install steps in order', () => {
    const msg = getInstallGuidance({
      steps: [
        {
          summary: 'Install Opera for Testing (recommended)',
          command: 'npx extension install opera'
        },
        {
          summary: 'Install Opera',
          command: 'npx extension install opera-stable'
        }
      ]
    })

    expect(msg).toMatch(
      new RegExp(
        '1\\) Install Opera for Testing \\(recommended\\)\\n' +
          ' {3}npx extension install opera'
      )
    )
    expect(msg).toMatch(
      /2\) Install Opera\n {3}npx extension install opera-stable/
    )
    expect(msg).not.toMatch(/Install Opera from the official site/)
    expect(msg).toMatch(/We couldn't find an Opera browser/)
  })

  it('getInstallGuidance with empty steps keeps the default hint', () => {
    expect(getInstallGuidance({steps: []})).toBe(getInstallGuidance())
  })
})
