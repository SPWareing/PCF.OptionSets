import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { DropdownButton } from '../OptionsetColourControl/components/DropDownButton';

const renderWithFluentProvider = (ui: React.ReactElement) =>
    render(<FluentProvider theme={webLightTheme}>{ui}</FluentProvider>);

describe('DropdownButton', () => {
    it('renders "---" when selectedKey is undefined', () => {
        const { getByText } = renderWithFluentProvider(
            <DropdownButton
                selectedKey={undefined}
                selectedOption={undefined}
                fillStyles={undefined}
                backGroundFill={false}
                iconType={undefined}
                fontSize="20"
            />,
        );
        expect(getByText('---')).toBeInTheDocument();
    });

    it('renders "---" when selectedKey is -1', () => {
        const { getByText } = renderWithFluentProvider(
            <DropdownButton
                selectedKey={-1}
                selectedOption={undefined}
                fillStyles={undefined}
                backGroundFill={false}
                iconType={undefined}
                fontSize="20"
            />,
        );
        expect(getByText('---')).toBeInTheDocument();
    });

    it('renders the option label when a valid option is selected', () => {
        const selectedOption = { Value: 1, Label: 'Option 1', Color: 'Red' } as ComponentFramework.PropertyHelper.OptionMetadata;
        const { getByText } = renderWithFluentProvider(
            <DropdownButton
                selectedKey={1}
                selectedOption={selectedOption}
                fillStyles={undefined}
                backGroundFill={false}
                iconType={undefined}
                fontSize="20"
            />,
        );
        expect(getByText('Option 1')).toBeInTheDocument();
    });

    it('renders an icon when backGroundFill is false and a valid option is selected', () => {
        const selectedOption = { Value: 1, Label: 'Option 1', Color: 'Red' } as ComponentFramework.PropertyHelper.OptionMetadata;
        const { container } = renderWithFluentProvider(
            <DropdownButton
                selectedKey={1}
                selectedOption={selectedOption}
                fillStyles={undefined}
                backGroundFill={false}
                iconType="CircleFilled"
                fontSize="20"
            />,
        );
        expect(container.querySelector('svg')).not.toBeNull();
    });

    it('does not render an icon when backGroundFill is true', () => {
        const selectedOption = { Value: 1, Label: 'Option 1', Color: 'Red' } as ComponentFramework.PropertyHelper.OptionMetadata;
        const fillStyles: React.CSSProperties = { background: 'Red' };
        const { container } = renderWithFluentProvider(
            <DropdownButton
                selectedKey={1}
                selectedOption={selectedOption}
                fillStyles={fillStyles}
                backGroundFill={true}
                iconType="CircleFilled"
                fontSize="20"
            />,
        );
        expect(container.querySelector('svg')).toBeNull();
    });
});
