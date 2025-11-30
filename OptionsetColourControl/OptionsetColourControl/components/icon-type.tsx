import { CircleFilled, CircleRegular, FluentIcon } from '@fluentui/react-icons';
import * as React from 'react';

export interface IIconTypeProps extends React.ComponentProps<FluentIcon> {
    icon: string | undefined;
}

export const IconType: React.FC<IIconTypeProps> = ({ icon, ...props }) => {
    const Icon = icon === 'CircleFilled' ? CircleFilled : CircleRegular;

    return <Icon {...props}></Icon>;
};
