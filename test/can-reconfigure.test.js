/* eslint-disable no-undef */
import { describe, expect, it } from 'vitest'

const canConfigure = (from, to) => {
    if (from === undefined) throw new Error('from is required')
    if (typeof from !== 'string') throw new Error('from is not a string')
    if (typeof to !== 'string') throw new Error('to is not a string')
    if (from.length !== to.length) return false

    const isSameLength = from.length === to.length
    if (!isSameLength) return false

    const hasSameUniqueLetters = new Set(from).size === new Set(to).size
    if (!hasSameUniqueLetters) return false

    const transformations = {}
    for (let i = 0; i < from.length; i++) {
        const fromLetter = from[i]
        const toLetter = to[i]

        const storedLetter = transformations[fromLetter]
        if (storedLetter && storedLetter !== toLetter) return false

        transformations[fromLetter] = toLetter
    }

    return true
}

describe('canReconfigure', () => {
    it('should be a function', () => {
        expect(canConfigure).toBeTypeOf('function')
    })
    it('should throw if first parameter is missing', () => {
        expect(() => canConfigure()).toThrow()
    })
    it('should throw if first parameter is not a string', () => {
        expect(() => canConfigure(2)).toThrow()
    })

    it('should throw if second parameter is not a string', () => {
        expect(() => canConfigure('a')).toThrow()
    })

    it('should return a boolean', () => {
        expect(canConfigure('a', 'b')).toBeTypeOf('boolean')
    })
    it('should return false if string provided have different length', () => {
        expect(canConfigure('abc', 'de')).toBe(false)
    })
    it('should return false if string provided have different number of unique letters', () => {
        expect(canConfigure('abc', 'ddd')).toBe(false)
    })
    it('should return false if string has different order of transformation', () => {
        expect(canConfigure('XBOX', 'XXBO')).toBe(false)
    })

})
