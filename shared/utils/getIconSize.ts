import { ICON_SIZES } from '../constants';

/**
 *
 * @param iconSize {string | undefined} - The size of the icon, can be 'Small', 'Medium', 'Large' or undefined.
 * @returns The numeric size associated with the provided icon size.
 */
export const getIconSize = (iconSize: string | undefined): number => {
    return iconSize ? ICON_SIZES[iconSize] : ICON_SIZES.Medium;
};
