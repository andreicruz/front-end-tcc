import React from 'react';
import { Text } from 'react-native';
import { globalFonts } from '../../utils/globalStyles';

export default function MyAppText(props) {
	return (
        <Text style={globalFonts.font}>{props.text}</Text>
	);
}