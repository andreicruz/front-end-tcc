import React from 'react';
import { Text } from 'react-native';
import { globalFonts } from '../../utils/globalStyles';

export default function MyAppText(props) {
	return (
		// <Text style={[globalFonts.font, { fontSize: props.fontSize !== undefined ? props.fontSize : 14}]}>{props.text}</Text>
		<Text style={{
			fontSize: props.fontSize !== undefined ? props.fontSize : 14,
			color: props.textColor !== undefined ? props.textColor : "black",
		}}>
			{props.text}
		</Text>
	);
}