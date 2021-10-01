import { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_DARK_1,
    COLOR_BRAND,
    COLOR_ERROR,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_GRAY_3,
} from '../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { SHADOW_OUTLINE, SHADOW_ERROR } from '../../../styles/shadows';
import { IconPosition } from '../../../components/types';

export interface Props {
    isFocused?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    hasIcon?: boolean;
    iconPosition?: IconPosition;
}

const Input = styled.TextInput<Props>`
    background-color: ${COLOR_GRAY_1};
    border: 1px solid ${COLOR_GRAY_2};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    padding: 0 16px;
    height: 48px;
    color: ${COLOR_DARK_1};
    font-size: ${FONT_SIZE_TEXT_LARGE};

    ${props =>
        props.isFocused &&
        `
        border: 1px solid ${COLOR_BRAND};
        background-color: ${COLOR_GRAY_1};
        box-shadow: ${SHADOW_OUTLINE};
    `}

    ${props =>
        props.error &&
        `
        background-color: ${COLOR_GRAY_1};
        border: 1px solid ${COLOR_ERROR};
    `}

    ${props =>
        props.error &&
        props.isFocused &&
        `
        box-shadow: ${SHADOW_ERROR};
        padding: 0 16px;
    `}

    ${props =>
        props.disabled &&
        `
        background-color: ${COLOR_GRAY_TRANSPARENT_2};
        color: ${COLOR_GRAY_3};
    `}
    ${props =>
        props.hasIcon &&
        props.iconPosition === 'left' &&
        `
        padding-left: 45px;
    `}
    ${props =>
        props.hasIcon &&
        props.iconPosition === 'right' &&
        `
        padding-right: 45px;
    `}
`;

export default Input;
