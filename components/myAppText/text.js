import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';


export default function MyAppText(props) {
	const [loadedFont, setFont] = useState(false);

	useEffect(() => {
		async function teste() {
			await Font.loadAsync({
				'Baloo-Tamma-Regular': require('../../assets/fonts/BalooTamma2-Regular.ttf'),
				'Baloo-Tamma-Bold': require('../../assets/fonts/BalooTamma2-Bold.ttf'),
				'Baloo-Tamma-SemiBold': require('../../assets/fonts/BalooTamma2-SemiBold.ttf'),
				'Baloo-Tamma-Extrabold': require('../../assets/fonts/BalooTamma2-ExtraBold.ttf'),
			});
			setFont(true);
		}
		teste();
	}, [])

	// const [fontsLoaded] = useFonts({
	// 	'Baloo-Tamma-Regular': require('../../assets/fonts/BalooTamma2-Regular.ttf'),
	// 	'Baloo-Tamma-Bold': require('../../assets/fonts/BalooTamma2-Bold.ttf'),
	// 	'Baloo-Tamma-SemiBold': require('../../assets/fonts/BalooTamma2-SemiBold.ttf'),
	// 	'Baloo-Tamma-Extrabold': require('../../assets/fonts/BalooTamma2-ExtraBold.ttf'),
	// });

	return (
		// <Text style={[globalFonts.font, { fontSize: props.fontSize !== undefined ? props.fontSize : 14}]}>{props.text}</Text>
		<>
			{ loadedFont ? (
				<Text style={{
					fontSize: props.fontSize !== undefined ? props.fontSize : 14,
					color: props.textColor !== undefined ? props.textColor : "black",
					fontFamily: props.fontType !== undefined ? props.fontType : 'Baloo-Tamma-Extrabold',
				}}>
					{props.text}
				</Text>
			  ) : (
				<Text style={{
					fontSize: props.fontSize !== undefined ? props.fontSize : 14,
					color: props.textColor !== undefined ? props.textColor : "black",
				}}>
					{props.text}
				</Text>
			  )}
		</>
		// <Text style={{
		// 	fontSize: props.fontSize !== undefined ? props.fontSize : 14,
		// 	color: props.textColor !== undefined ? props.textColor : "black",
		// 	fontFamily: props.fontType !== undefined ? props.fontType : 'Baloo-Tamma-Extrabold',
		// }}>
		// 	{props.text}
		// </Text>
	);
}