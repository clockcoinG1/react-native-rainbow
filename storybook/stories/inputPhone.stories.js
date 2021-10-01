import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import InputPhone from '../../src/components/InputPhone';

const styles = {
    marginBottom: 24,
};

function BasicUsage() {
    const [firstValue, setFirstValue] = useState();
    const [secondValue, setSecondValue] = useState({
        phone: '12345678',
        isoCode: 'mx',
    });

    const [thirdValue, setThirdValue] = useState({
        isoCode: 'invalid',
    });

    return (
        <>
            <InputPhone
                style={styles}
                label="Label"
                placeholder="Enter Phone Number"
                value={firstValue}
                onChange={setFirstValue}
            />

            <InputPhone label="Label" value={secondValue} onChange={setSecondValue} />

            <InputPhone label="Label" value={thirdValue} onChange={setThirdValue} />
        </>
    );
}

storiesOf('InputPhone', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => <BasicUsage />);
