import * as React from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';
import { IconType } from './IconType';

export interface DropdownButtonProps {
    selectedKey: number | undefined;
    selectedOption: ComponentFramework.PropertyHelper.OptionMetadata | undefined;
    fillStyles: React.CSSProperties | undefined;
    backGroundFill: boolean;
    iconType: string | undefined;
    fontSize: string;
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalM,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});

export const DropdownButton: React.FC<DropdownButtonProps> = ({
    selectedKey,
    selectedOption,
    fillStyles,
    backGroundFill,
    iconType,
    fontSize,
}) => {
    const styles = useStyles();

    if (selectedKey === undefined || selectedKey === -1) {
        return <span>{'---'}</span>;
    }

    return (
        <div className={styles.container} style={fillStyles} title={selectedOption?.Label}>
            {!backGroundFill && (
                <IconType
                    icon={iconType}
                    style={{ color: selectedOption?.Color, flexShrink: '0' }}
                    fontSize={fontSize}
                />
            )}
            {selectedOption?.Label}
        </div>
    );
};
