import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import {
    COLOR_BRAND,
    COLOR_ERROR,
    COLOR_SUCCESS,
    COLOR_WARNING,
    COLOR_GRAY_TRANSPARENT_2,
} from '../../../styles/colors';

export type Variants = 'brand' | 'success' | 'warning' | 'error';

interface Props extends BaseProps {
    variant?: Variants;
    value?: number;
}

export const StyledContainer = styled.View`
    position: relative;
    height: 4px;
    border-radius: 100px;
    background-color: ${COLOR_GRAY_TRANSPARENT_2};
    align-items: center;
`;

export const StyledBar = styled.View<Props>`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${COLOR_BRAND};
    height: 100%;
    width: ${props => props.value}%;
    border-radius: 100px;

    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${COLOR_SUCCESS};
        `};

    ${props =>
        props.variant === 'warning' &&
        `
            background-color: ${COLOR_WARNING};
        `};

    ${props =>
        props.variant === 'error' &&
        `
            background-color: ${COLOR_ERROR};
        `};
`;
