import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IconType } from '../components/IconType';

describe('IconType', () => {
    it('renders without crashing', () => {
        const { container } = render(<IconType icon={undefined} />);
        expect(container.firstChild).not.toBeNull();
    });

    it('renders an SVG element', () => {
        const { container } = render(<IconType icon="CircleFilled" />);
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
    });

    it('renders an SVG element when icon is OvalFilled', () => {
        const { container } = render(<IconType icon="OvalFilled" />);
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
    });

    it('applies additional props to the icon', () => {
        const { container } = render(
            <IconType icon="CircleFilled" style={{ color: 'red' }} />,
        );
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
    });
});
