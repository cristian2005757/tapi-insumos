import { describe, it, expect } from 'vitest'
import { formatPrice } from '../format'

describe('formatPrice', () => {
  it('formats COP currency', () => {
    expect(formatPrice(1000)).toContain('1')
    expect(formatPrice(450000)).toMatch(/450[\s.]?000/)
  })
})
