import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { webLightTheme } from '@fluentui/react-components';
import { OptionsetColour } from '../OptionsetColourControl/components/OptionsetColour';

const mockOptions: ComponentFramework.PropertyHelper.OptionMetadata[] = [
    { Value: 1, Label: 'Option 1', Color: 'Red' } as ComponentFramework.PropertyHelper.OptionMetadata,
    { Value: 2, Label: 'Option 2', Color: 'Green' } as ComponentFramework.PropertyHelper.OptionMetadata,
    { Value: 3, Label: 'Option 3', Color: 'Blue' } as ComponentFramework.PropertyHelper.OptionMetadata,
];

describe('OptionsetColour', () => {
    it('renders without crashing', () => {
        const onChange = vi.fn();
        const { container } = render(
            <OptionsetColour
                options={mockOptions}
                selectedValue={undefined}
                theme={webLightTheme}
                onChange={onChange}
                id="test-id"
                iconSize="Medium"
                iconType="CircleFilled"
                backGroundFill={false}
                disabled={false}
            />,
        );
        expect(container.firstChild).not.toBeNull();
    });

    it('renders a dropdown button', () => {
        const onChange = vi.fn();
        render(
            <OptionsetColour
                options={mockOptions}
                selectedValue={undefined}
                theme={webLightTheme}
                onChange={onChange}
                id="test-id"
                iconSize="Medium"
                iconType="CircleFilled"
                backGroundFill={false}
                disabled={false}
            />,
        );
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders with a pre-selected value', () => {
        const onChange = vi.fn();
        render(
            <OptionsetColour
                options={mockOptions}
                selectedValue={1}
                theme={webLightTheme}
                onChange={onChange}
                id="test-id"
                iconSize="Medium"
                iconType="CircleFilled"
                backGroundFill={false}
                disabled={false}
            />,
        );
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders as disabled when disabled prop is true', () => {
        const onChange = vi.fn();
        render(
            <OptionsetColour
                options={mockOptions}
                selectedValue={undefined}
                theme={webLightTheme}
                onChange={onChange}
                id="test-id"
                iconSize="Medium"
                iconType="CircleFilled"
                backGroundFill={false}
                disabled={true}
            />,
        );
        const combobox = screen.getByRole('combobox');
        expect(combobox).toBeDisabled();
    });
});
