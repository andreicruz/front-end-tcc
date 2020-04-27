import React from 'react';
import { Text } from 'react-native';
import { globalFonts, globalColors, globalAlignments } from '../../utils/globalStyles';

export default function MyAppTextHeader(props) {
	return (
        <Text style={[globalFonts.font, globalColors.whiteText, globalAlignments.textToRight ]}>{props.text}</Text>
	);
}