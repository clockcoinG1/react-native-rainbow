import React from 'react';
import PropTypes from 'prop-types';

import { BaseProps } from '../types';
import { StyledContainer } from './styled';
import RenderIf from '../RenderIf';
import Avatars from './Avatars';
import Counter from './Counter';
import { AvatarSizes, AvatarProps } from './types';

interface AvatarGroupProps extends BaseProps {
    size?: AvatarSizes;
    avatars?: AvatarProps[];
    maxAvatars?: number;
    showCounter?: boolean;
}

/**
 * An AvatarGroup is an element that communicates to the user
 *  that there are many entities associated to an item.
 */

const AvatarGroup: React.FC<AvatarGroupProps> = ({
    size,
    avatars = [],
    maxAvatars,
    showCounter,
    style,
}: AvatarGroupProps): JSX.Element => {
    return (
        <StyledContainer style={style}>
            <RenderIf isTrue={showCounter}>
                <Counter size={size} avatars={avatars} />
            </RenderIf>
            <Avatars size={size} maxAvatars={maxAvatars} avatars={avatars} />
        </StyledContainer>
    );
};

AvatarGroup.propTypes = {
    /** The size of the AvatarGroup. Valid values are x-small, small, medium, and large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small']),
    /** An array with the Avatars data. */
    avatars: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            initials: PropTypes.string,
            icon: PropTypes.node,
        }).isRequired,
    ),
    /** Specify how many Avatars will render. */
    maxAvatars: PropTypes.number,
    /** This shows a counter with the total value of the number of avatars.
     * It is independent of the number of avatars displayed in the component. */
    showCounter: PropTypes.bool,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AvatarGroup.defaultProps = {
    size: 'medium',
    avatars: [],
    maxAvatars: 3,
    showCounter: false,
    style: undefined,
};

export default AvatarGroup;
