import React from 'react';
import { Text } from 'react-native';
import { globalFonts, globalAlignments } from '../../utils/globalStyles';

export default function MyAppTextHeader(props) {
	return (
        <Text style={[globalFonts.font, globalFonts.whiteText, globalAlignments.textToRight ]}>{props.text}</Text>
	);
}