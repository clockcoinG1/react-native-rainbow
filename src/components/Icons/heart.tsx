import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../types';

const Heart: React.FC<BaseProps> = ({ style }) => (
    <Svg viewBox="0 0 40 36" style={style}>
        <Path
            d="M20 35.587c-.57 0-1.118-.206-1.546-.58a463.56 463.56 0 00-4.549-3.913l-.007-.006c-4.03-3.434-7.51-6.4-9.93-9.321C1.26 18.5 0 15.404 0 12.02c0-3.287 1.127-6.319 3.173-8.538C5.243 1.237 8.085 0 11.174 0c2.31 0 4.424.73 6.285 2.17.94.726 1.79 1.615 2.541 2.653a12.86 12.86 0 012.541-2.654C24.402.73 26.517 0 28.826 0c3.089 0 5.93 1.237 8.001 3.483C38.873 5.703 40 8.734 40 12.02c0 3.383-1.26 6.48-3.967 9.745-2.421 2.922-5.9 5.888-9.93 9.321a458.865 458.865 0 00-4.557 3.92c-.428.374-.977.58-1.546.58zM11.174 2.343c-2.427 0-4.656.969-6.278 2.728-1.646 1.785-2.553 4.254-2.553 6.95 0 2.845 1.057 5.39 3.428 8.25 2.292 2.766 5.7 5.67 9.647 9.034l.007.006a468.11 468.11 0 014.572 3.932 546.906 546.906 0 014.586-3.939c3.946-3.363 7.355-6.267 9.646-9.032 2.37-2.861 3.428-5.406 3.428-8.25 0-2.697-.907-5.166-2.553-6.951-1.621-1.76-3.851-2.728-6.278-2.728-1.778 0-3.41.565-4.852 1.68-1.284.993-2.179 2.25-2.704 3.128-.27.452-.744.722-1.27.722s-1-.27-1.27-.722c-.525-.878-1.42-2.135-2.704-3.128-1.442-1.115-3.074-1.68-4.852-1.68z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

Heart.propTypes = {
    style: PropTypes.object,
};

Heart.defaultProps = {
    style: undefined,
};

export default Heart;