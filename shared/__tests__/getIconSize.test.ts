import { describe, it, expect } from 'vitest';
import { getIconSize } from '../utils/getIconSize';

describe('getIconSize', () => {
    it('returns Medium size (20) when iconSize is undefined', () => {
        expect(getIconSize(undefined)).toBe(20);
    });

    it('returns 16 for Small', () => {
        expect(getIconSize('Small')).toBe(16);
    });

    it('returns 20 for Medium', () => {
        expect(getIconSize('Medium')).toBe(20);
    });

    it('returns 24 for Large', () => {
        expect(getIconSize('Large')).toBe(24);
    });

    it('returns Medium size (20) for an empty string', () => {
        expect(getIconSize('')).toBe(20);
    });
});
