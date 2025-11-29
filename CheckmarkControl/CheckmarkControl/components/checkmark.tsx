import * as React from "react";
import {useEffect} from "react";
import {CheckmarkCircleColor , DismissCircleColor} from "@fluentui/react-icons";
import {FluentProvider, Theme, makeStyles} from "@fluentui/react-components";


export interface CheckmarkProps {
    value: boolean;
    size?: number;
    theme: Theme;
    onChange: (newValue: boolean) => void;

}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
});

export const Checkmark: React.FC<CheckmarkProps> = ({ value, size, theme, onChange }) => {

    useEffect(() => {        
        onChange(value)
    }, [value]);

    const _style = useStyles();
    const iconRender = () => {
        const IconComponent = value ? CheckmarkCircleColor : DismissCircleColor;
        return <div className={_style.container}><IconComponent fontSize={size ? `${size}px` : '50px'} /></div>;
    };
    
    return (
        <FluentProvider theme={theme}>
            {iconRender()}
        </FluentProvider>
    )
};
