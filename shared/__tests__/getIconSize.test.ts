import { describe, it, expect } from 'vitest';
import { getIconSize, IconSizes } from '../utils/getIconSize';

describe('getIconSize', () => {
    it.each([
        { input: undefined, expected: IconSizes.Medium, label: 'undefined' },
        { input: 'Small', expected: IconSizes.Small, label: 'Small' },
        { input: 'Medium', expected: IconSizes.Medium, label: 'Medium' },
        { input: 'Large', expected: IconSizes.Large, label: 'Large' },
        { input: '', expected: IconSizes.Medium, label: 'empty string' },
    ])('returns $expected for $label', ({ input, expected }) => {
        expect(getIconSize(input)).toBe(expected);
    });
});
