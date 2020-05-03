import React from 'react';
import { Text } from 'react-native';
import { useFonts } from '@use-expo/font';

export default function MyAppText(props) {
	const [fontsLoaded] = useFonts({
		'Baloo-Tamma-Regular': require('../../assets/fonts/BalooTamma2-Regular.ttf'),
		'Baloo-Tamma-Bold': require('../../assets/fonts/BalooTamma2-Bold.ttf'),
		'Baloo-Tamma-SemiBold': require('../../assets/fonts/BalooTamma2-SemiBold.ttf'),
		'Baloo-Tamma-Extrabold': require('../../assets/fonts/BalooTamma2-ExtraBold.ttf'),
	});

	return (
		// <Text style={[globalFonts.font, { fontSize: props.fontSize !== undefined ? props.fontSize : 14}]}>{props.text}</Text>
		<Text style={{
			fontSize: props.fontSize !== undefined ? props.fontSize : 14,
			color: props.textColor !== undefined ? props.textColor : "black",
			fontFamily: props.fontType !== undefined ? props.fontType : 'Baloo-Tamma-Extrabold',
		}}>
			{props.text}
		</Text>
	);
}