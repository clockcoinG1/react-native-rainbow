import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import InputCode from '../index';
import handlePasteCode from '../helpers/getCodeFromClipboard';

describe('<InputCode/>', () => {
    const numberOfDigits = 6;
    it('should create an input Code by the number of digits provided', () => {
        const testRenderer = TestRenderer.create(
            <InputCode digits={numberOfDigits} />,
        );
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType('TextInput').length).toEqual(
            numberOfDigits,
        );
    });

    it('should recognize code in a string', () => {
        const text = 'your awesome code is 131016';
        const sanitizeText = handlePasteCode(numberOfDigits, text);
        expect(sanitizeText.length).toEqual(numberOfDigits);
    });

    it('should recognize code in a string with spaces', () => {
        const text = 'your awesome code is 13 10 16';
        const sanitizeText = handlePasteCode(numberOfDigits, text);
        expect(sanitizeText.length).toEqual(numberOfDigits);
    });

    it('should recognize code in a string with special characters', () => {
        const text = 'your awesome code is 13-10-16';
        const sanitizeText = handlePasteCode(numberOfDigits, text);
        expect(sanitizeText.length).toEqual(numberOfDigits);
    });
});
