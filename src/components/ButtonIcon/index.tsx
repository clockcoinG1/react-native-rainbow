import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Button } from './styled/index';
import { BaseProps, ButtonIconVariant, ButtonIconSize } from '../types';

export interface Props extends BaseProps {
    onPress?: (event?: any) => void;
    icon?: ReactNode;
    disabled?: boolean;
    variant?: ButtonIconVariant;
    size?: ButtonIconSize;
}

const ButtonIcon: React.FC<Props> = props => {
    const { onPress, icon, disabled, variant, size, style } = props;

    return (
        <Button onPress={onPress} disabled={disabled} variant={variant} size={size} style={style}>
            {icon}
        </Button>
    );
};

ButtonIcon.propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.node,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['base', 'brand', 'success', 'neutral']),
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ButtonIcon.defaultProps = {
    onPress: () => {},
    icon: undefined,
    disabled: false,
    variant: 'base',
    size: 'medium',
    style: undefined,
};

export default ButtonIcon;
