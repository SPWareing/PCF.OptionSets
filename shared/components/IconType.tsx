import { CircleFilled, CircleRegular, FluentIcon, OvalFilled } from '@fluentui/react-icons';
import * as React from 'react';
import { ICONS } from '../constants';

export interface IIconTypeProps extends React.ComponentProps<FluentIcon> {
    icon: string | undefined;
}

export const IconType: React.FC<IIconTypeProps> = ({ icon, ...props }) => {
    const Icon = icon === ICONS.CIRCLE_FILLED ? CircleFilled : OvalFilled;

    return <Icon {...props}></Icon>;
};
