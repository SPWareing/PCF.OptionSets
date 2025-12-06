import * as React from 'react';
import { Option } from '@fluentui/react-components';
import { IconType } from './IconType';

interface DropdownOptionProps {
    option: ComponentFramework.PropertyHelper.OptionMetadata & { Value: number; Label: string; Color: string };
    iconType: string | undefined;
}

export const DropdownOption: React.FC<DropdownOptionProps> = ({ option, iconType }) => {
    return (
        <Option key={option.Value} text={option.Label} value={option.Value.toString()}>
            {option.Value !== -1 && <IconType icon={iconType} style={{ color: option.Color }} />}
            {option.Label}
        </Option>
    );
};
