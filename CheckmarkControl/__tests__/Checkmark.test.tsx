import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { webLightTheme } from '@fluentui/react-components';
import { Checkmark } from '../CheckmarkControl/components/Checkmarks';

describe('Checkmark', () => {

    it.each([true, false])('renders without crashing when value is %s', (value) => {
        const onChange = vi.fn();
        const {container} = render(<Checkmark value={value} theme={webLightTheme} onChange={onChange}/>);
        expect(container.firstChild).not.toBeNull();
    });

    it.each([true, false])('calls onChange on mount with the %s', (value) => {
        const onChange = vi.fn();
        const {container} = render(<Checkmark value={value} theme={webLightTheme} onChange={onChange}/>);
        expect(onChange).toHaveBeenCalledWith(value);
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
