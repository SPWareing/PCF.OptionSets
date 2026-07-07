import { describe, it, expect } from 'vitest';
import { getIconSize, IconSizes } from '../utils/getIconSize';

type Input = string | undefined;

const testCases: { input: Input; expected: (typeof IconSizes)[keyof typeof IconSizes]; label: string }[] = [
    { input: undefined, expected: IconSizes.Medium, label: 'undefined' },
    { input: 'Small', expected: IconSizes.Small, label: 'Small' },
    { input: 'Medium', expected: IconSizes.Medium, label: 'Medium' },
    { input: 'Large', expected: IconSizes.Large, label: 'Large' },
    { input: '', expected: IconSizes.Medium, label: 'empty string' },
];

describe('getIconSize', () => {
    it.each(testCases)('returns $expected for $label', ({ input, expected }) => {
        expect(getIconSize(input as Input)).toBe(expected);
    });
});
