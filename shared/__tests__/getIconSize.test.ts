import { describe, it, expect } from 'vitest';
import { getIconSize, IconSizes } from '../utils/getIconSize';

describe('getIconSize', () => {
    it('returns Medium size (20) when iconSize is undefined', () => {
        expect(getIconSize(undefined)).toBe(IconSizes.Medium);
    });

    it('returns 16 for Small', () => {
        expect(getIconSize('Small')).toBe(IconSizes.Small);
    });

    it('returns 20 for Medium', () => {
        expect(getIconSize('Medium')).toBe(IconSizes.Medium);
    });

    it('returns 24 for Large', () => {
        expect(getIconSize('Large')).toBe(IconSizes.Large);
    });

    it('returns Medium size (20) for an empty string', () => {
        expect(getIconSize('')).toBe(IconSizes.Medium);
    });
});
