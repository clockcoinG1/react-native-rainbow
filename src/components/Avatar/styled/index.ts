import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { COLOR_BRAND, COLOR_WHITE } from '../../../styles/colors';

interface Props extends BaseProps {
    size?: string;
}

export const StyledAvatar = styled.View<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR_WHITE};
    background: ${COLOR_BRAND};
    border: none;
    border-radius: 24px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;

    ${props =>
        props.size === 'large' &&
        `
            height: 48px;
            width: 48px;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            height: 32px;
            width: 32px;
        `};
    ${props =>
        props.size === 'small' &&
        `
            height: 24px;
            width: 24px;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            height: 20px;
            width: 20px;
        `};
`;

export const StyledImage = styled.Image<{}>`
    border-radius: 24px;
    height: 100%;
    width: 100%;
`;

export const StyledText = styled.Text<Props>`
    color: ${COLOR_WHITE};
    text-align: center;
    text-transform: uppercase;

    ${props =>
        props.size === 'large' &&
        `
            font-size: 20px
        `};
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 16px
        `};
    ${props =>
        props.size === 'small' &&
        `
            font-size: 12px
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            font-size: 10px
        `};
`;
