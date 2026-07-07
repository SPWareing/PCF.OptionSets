import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { IconRender } from '../CheckmarkControl/components/IconRender';

const renderWithFluentProvider = (ui: React.ReactElement) =>
    render(<FluentProvider theme={webLightTheme}>{ui}</FluentProvider>);

describe('IconRender', () => {
    it('renders without crashing when value is true', () => {
        const { container } = renderWithFluentProvider(<IconRender value={true} />);
        expect(container.firstChild).not.toBeNull();
    });

    it('renders without crashing when value is false', () => {
        const { container } = renderWithFluentProvider(<IconRender value={false} />);
        expect(container.firstChild).not.toBeNull();
    });

    it('renders an SVG icon', () => {
        const { container } = renderWithFluentProvider(<IconRender value={true} />);
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
    });

    it('renders with a custom size', () => {
        const { container } = renderWithFluentProvider(<IconRender value={true} size={32} />);
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
    });

    it('renders a container div', () => {
        const { container } = renderWithFluentProvider(<IconRender value={true} />);
        const div = container.querySelector('div');
        expect(div).not.toBeNull();
    });
});
