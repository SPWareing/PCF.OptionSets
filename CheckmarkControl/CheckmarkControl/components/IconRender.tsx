import * as React from "react";
import {CheckmarkCircleColor , DismissCircleColor} from "@fluentui/react-icons";
import {FluentProvider, Theme, makeStyles} from "@fluentui/react-components";
import { CheckmarkProps } from "./Checkmark";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
});

interface IconRenderProps extends Omit<CheckmarkProps, 'theme' | 'onChange'> {
    // IconRenderProps now has: value, size
    value: boolean;
    size?: number;
}

export  const IconRender : React.FC<IconRenderProps> = ({ value, size }) => {
        const _style = useStyles();
        const IconComponent = value ? CheckmarkCircleColor : DismissCircleColor;
        return <div className={_style.container}><IconComponent fontSize={size ? `${size}px` : '50px'} /></div>;
    };