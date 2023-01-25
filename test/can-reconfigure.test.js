/* eslint-disable no-undef */
import { describe, expect, it } from 'vitest'
import { canConfigure } from '../src/can-reconfigure'

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
