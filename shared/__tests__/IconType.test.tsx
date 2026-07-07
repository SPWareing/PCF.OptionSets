import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IconType } from '../components/IconType';

describe('IconType', () => {
    it('renders without crashing', () => {
        const { container } = render(<IconType icon={undefined} />);
        expect(container.firstChild).not.toBeNull();
    });

    it.each([{ icon: 'CircleFilled' }, { icon: 'OvalFilled' }])(`should render with each $icon`, ({ icon }) => {
        const { container } = render(<IconType icon={icon} />);
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();        
    });


    it.each([{ icon: 'CircleFilled', colour: 'red', expected: 'rgb(255,0,0)' }, { icon: 'OvalFilled', colour: 'blue', expected: 'rgb(0,0,255)' }])(
        'applies color $colour to $icon', ({ icon, colour, expected }) => {
            const { container } = render(<IconType icon={icon} style={{ color: colour }} />);
            const svg = container.querySelector('svg');
            expect(svg).not.toBeNull();
            expect(svg).toHaveStyle(`color: ${expected}`);
        }
    )


});
