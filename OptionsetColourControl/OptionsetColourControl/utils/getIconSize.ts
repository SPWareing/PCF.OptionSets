const IconSizes: Record<string, number> = { Small: 16, Medium: 20, Large: 24 };

export const getIconSize = (iconSize: string | undefined): number => {
    return iconSize ? IconSizes[iconSize] : IconSizes.Medium;
};
