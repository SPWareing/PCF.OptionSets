import * as React from 'react';
import { useEffect, useState } from 'react';
import {
    FluentProvider,
    Dropdown,
    Theme,
    SelectionEvents,
    OptionOnSelectData,
    makeStyles,
    IdPrefixProvider,
    tokens,
} from '@fluentui/react-components';
import { getIconSize } from '../utils/getIconSize';
import { DropdownButton, DropdownButtonProps } from './DropDownButton';
import { DropdownOption } from './DropDownOption';

export interface IOptionsetColourProps {
    options: ComponentFramework.PropertyHelper.OptionMetadata[];
    selectedValue: number | undefined;
    theme: Theme;
    onChange: (newValue: number | undefined) => void;
    id: string;
    iconSize: string | undefined;
    iconType: string | undefined;
    backGroundFill: boolean;
    disabled: boolean;
}

const useStyles = makeStyles({
    dropdown: {
        minWidth: '150px',
        height: '32px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& button': {
            ': disabled': {
                backgroundColor: tokens.colorNeutralBackground1Hover,
                color: tokens.colorNeutralForeground1,
            },
        },
    },
});

export const OptionsetColour: React.FC<IOptionsetColourProps> = ({
    options,
    selectedValue,
    theme,
    onChange,
    id,
    iconSize,
    iconType,
    backGroundFill,
    disabled,
}: IOptionsetColourProps) => {
    const [selectedKey, setSelectedKey] = useState<number | undefined>(selectedValue);

    useEffect(() => {
        setSelectedKey(selectedValue);
    }, [selectedValue]);

    const optionSet = React.useMemo(() => [{ Value: -1, Label: '--- Select ---', Color: '' }, ...options], [options]);

    const fontSize = getIconSize(iconSize);

    const optionSelected = (event: SelectionEvents, data: OptionOnSelectData) => {
        const newValue = data.optionValue === '-1' || !data.optionValue ? undefined : parseInt(data.optionValue);
        setSelectedKey(newValue);
        onChange(newValue);
    };
    const selectedOption = options.find((opt) => opt.Value === selectedKey);
    const fillStyles: React.CSSProperties | undefined = backGroundFill
        ? {
              background: selectedOption?.Color,
              color: theme.colorNeutralForegroundInverted,
              borderRadius: tokens.borderRadiusMedium,
              padding: '2px 16px',
              justifyContent: 'flex-start',
              width: 'fit-content',
              minWidth: '75%',
              boxSizing: 'border-box',
          }
        : undefined;

    const styles = useStyles();

    const dropdownButtonProps: DropdownButtonProps = {
        selectedKey,
        selectedOption,
        fillStyles,
        backGroundFill,
        iconType,
        fontSize: fontSize.toString(),
    };

    return (
        <IdPrefixProvider value={`optionset-colour-control-${id}`}>
            <FluentProvider theme={theme} style={{ width: '100%' }}>
                <Dropdown
                    className={styles.dropdown}
                    placeholder="---"
                    onOptionSelect={optionSelected}
                    defaultValue={selectedKey !== undefined ? selectedKey.toString() : ''}
                    defaultSelectedOptions={selectedKey !== undefined ? [selectedKey.toString()] : []}
                    appearance="filled-darker"
                    button={<DropdownButton {...dropdownButtonProps} />}
                    disabled={disabled}
                >
                    {optionSet.map((option) => (
                        <DropdownOption key={option.Value} {...{ option, iconType }} />
                    ))}
                </Dropdown>
            </FluentProvider>
        </IdPrefixProvider>
    );
};
