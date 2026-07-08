import { describe, it, expect } from 'vitest';
import { getIconSize } from '../utils/getIconSize';
import { ICON_SIZES } from '../constants';

describe('getIconSize', () => {
    it.each([
        { input: undefined, expected: ICON_SIZES.Medium, label: 'undefined' },
        { input: 'Small', expected: ICON_SIZES.Small, label: 'Small' },
        { input: 'Medium', expected: ICON_SIZES.Medium, label: 'Medium' },
        { input: 'Large', expected: ICON_SIZES.Large, label: 'Large' },
        { input: '', expected: ICON_SIZES.Medium, label: 'empty string' },
    ])('returns $expected for $label', ({ input, expected }) => {
        expect(getIconSize(input)).toBe(expected);
    });
});
