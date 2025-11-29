import * as React from 'react';
import { useEffect, useState } from 'react';
import { CircleFilled } from '@fluentui/react-icons';
import {
    FluentProvider,
    Dropdown,
    Option,
    Theme,
    SelectionEvents,
    OptionOnSelectData,
    makeStyles,
    IdPrefixProvider,
} from '@fluentui/react-components';

export interface IOptionsetColourProps {
    options: ComponentFramework.PropertyHelper.OptionMetadata[];
    selectedValue: number | undefined;
    theme: Theme;
    onChange: (newValue: number | undefined) => void;
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    dropdown: {
        minWidth: '150px',
        height: '32px',
        width: '100%',
    },
});

export const OptionsetColour: React.FC<IOptionsetColourProps> = ({
    options,
    selectedValue,
    theme,
    onChange,
}: IOptionsetColourProps) => {
    const [selectedKey, setSelectedKey] = useState<number | undefined>(selectedValue);

    useEffect(() => {
        setSelectedKey(selectedValue);
    }, [selectedValue]);

    const optionSet = [{ Value: -1, Label: '--- Select---', Color: '' }, ...options];

    const optionSelected = (event: SelectionEvents, data: OptionOnSelectData) => {
        const newValue = data.optionValue === '-1' || !data.optionValue ? undefined : parseInt(data.optionValue);
        setSelectedKey(newValue);
        onChange(newValue);
    };

    const selectedOption = options.find((opt) => opt.Value === selectedKey);
    const styles = useStyles();
    const buttonRender = () => {
        if (selectedKey === undefined || selectedKey === -1) {
            return <span>{'---'}</span>;
        }
        return (
            <div className={styles.container}>
                <CircleFilled style={{ color: selectedOption?.Color }} />
                {selectedOption?.Label}
            </div>
        );
    };

    return (
        <IdPrefixProvider value="optionset-colour-control">
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
                            {option.Value !== -1 && <CircleFilled style={{ color: option.Color }} />}
                            {option.Label}
                        </Option>
                    ))}
                </Dropdown>
            </FluentProvider>
        </IdPrefixProvider>
    );
};
