import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { webLightTheme } from '@fluentui/react-components';
import { Checkmark } from '../CheckmarkControl/components/Checkmarks';

describe('Checkmark', () => {
    it('renders without crashing when value is true', () => {
        const onChange = vi.fn();
        const { container } = render(
            <Checkmark value={true} theme={webLightTheme} onChange={onChange} />,
        );
        expect(container.firstChild).not.toBeNull();
    });

    it('renders without crashing when value is false', () => {
        const onChange = vi.fn();
        const { container } = render(
            <Checkmark value={false} theme={webLightTheme} onChange={onChange} />,
        );
        expect(container.firstChild).not.toBeNull();
    });

    it('calls onChange on mount with the initial value', () => {
        const onChange = vi.fn();
        render(<Checkmark value={true} theme={webLightTheme} onChange={onChange} />);
        expect(onChange).toHaveBeenCalledWith(true);
    });

    it('calls onChange on mount with false value', () => {
        const onChange = vi.fn();
        render(<Checkmark value={false} theme={webLightTheme} onChange={onChange} />);
        expect(onChange).toHaveBeenCalledWith(false);
    });

    it('renders an SVG icon', () => {
        const onChange = vi.fn();
        const { container } = render(
            <Checkmark value={true} theme={webLightTheme} onChange={onChange} />,
        );
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
    });

    it('renders with a custom size', () => {
        const onChange = vi.fn();
        const { container } = render(
            <Checkmark value={true} size={32} theme={webLightTheme} onChange={onChange} />,
        );
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
    });
});
