import * as React from 'react';
import { useEffect, useState } from 'react';
import {
    FluentProvider,
    Dropdown,
    Option,
    Theme,
    SelectionEvents,
    OptionOnSelectData,
    makeStyles,
    IdPrefixProvider,
    tokens,
} from '@fluentui/react-components';
import { IconType } from './icon-type';

export interface IOptionsetColourProps {
    options: ComponentFramework.PropertyHelper.OptionMetadata[];
    selectedValue: number | undefined;
    theme: Theme;
    onChange: (newValue: number | undefined) => void;
    id: string;
    iconSize: string | undefined;
    iconType: string | undefined;
    backGroundFill: boolean;
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalM,
    },
    dropdown: {
        minWidth: '150px',
        height: '32px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

const IconSizes: Record<string, number> = { Small: 16, Medium: 20, Large: 24 };

export const OptionsetColour: React.FC<IOptionsetColourProps> = ({
    options,
    selectedValue,
    theme,
    onChange,
    id,
    iconSize,
    iconType,
    backGroundFill,
}: IOptionsetColourProps) => {
    const [selectedKey, setSelectedKey] = useState<number | undefined>(selectedValue);

    useEffect(() => {
        setSelectedKey(selectedValue);
    }, [selectedValue]);

    const optionSet = React.useMemo(() => [{ Value: -1, Label: '--- Select---', Color: '' }, ...options], [options]);

    const fontSize = iconSize ? IconSizes[iconSize] : IconSizes.Medium;

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
    const buttonRender = () => {
        if (selectedKey === undefined || selectedKey === -1) {
            return <span>{'---'}</span>;
        }

        return (
            <div className={styles.container} style={fillStyles}>
                {!backGroundFill && (
                    <IconType icon={iconType} style={{ color: selectedOption?.Color }} fontSize={fontSize} />
                )}
                {selectedOption?.Label}
            </div>
        );
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
                    button={buttonRender()}
                >
                    {optionSet.map((option) => (
                        <Option key={option.Value} text={option.Label} value={option.Value.toString()}>
                            {option.Value !== -1 && <IconType icon={iconType} style={{ color: option.Color }} />}
                            {option.Label}
                        </Option>
                    ))}
                </Dropdown>
            </FluentProvider>
        </IdPrefixProvider>
    );
};
