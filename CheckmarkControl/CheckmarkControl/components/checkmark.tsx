import * as React from "react";
import {useEffect} from "react";
import {FluentProvider, Theme} from "@fluentui/react-components";
import {IconRender} from "./IconRender";


export interface CheckmarkProps {
    value: boolean;
    size?: number;
    theme: Theme;
    onChange: (newValue: boolean) => void;

}



export const Checkmark: React.FC<CheckmarkProps> = ({ value, size, theme, onChange }) => {

    useEffect(() => {        
        onChange(value)
    }, [value]);
    
   
    
    return (
        <FluentProvider theme={theme}>
            <IconRender value={value} size={size} />
        </FluentProvider>
    )
};
