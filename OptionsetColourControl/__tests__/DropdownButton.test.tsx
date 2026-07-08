import * as React from 'react';
import { describe, it, expect, beforeAll } from 'vitest';
import { render } from '@testing-library/react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { DropdownButton } from '../OptionsetColourControl/components/DropDownButton';

const renderWithFluentProvider = (ui: React.ReactElement) =>
    render(<FluentProvider theme={webLightTheme}>{ui}</FluentProvider>);

describe('DropdownButton', () => {
    let selectedOption: ComponentFramework.PropertyHelper.OptionMetadata;
    beforeAll(() => {
        selectedOption = {
            Value: 1,
            Label: 'Option 1',
            Color: 'Red',
        } as ComponentFramework.PropertyHelper.OptionMetadata;
    });
    it.each([{ selectedKey: undefined }, { selectedKey: -1 }])(
        `renders "---" when selectedKey is %p`,
        ({ selectedKey }) => {
            const { getByText } = renderWithFluentProvider(
                <DropdownButton
                    selectedKey={selectedKey}
                    selectedOption={undefined}
                    fillStyles={undefined}
                    backGroundFill={false}
                    iconType={undefined}
                    fontSize="20"
                />,
            );
            expect(getByText('---')).toBeInTheDocument();
        },
    );

    it('renders the option label when a valid option is selected', () => {
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
