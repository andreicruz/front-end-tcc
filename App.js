import React from 'react';
import { View } from 'react-native';
import Routes from './components/routes/routes';
import { StatusBar } from 'react-native';

export default function App() {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Routes/>
		</>
		// <View>			
		// 	<Header/>
		// 	<View style={globalAlignments.marginApp}>
		// 		<Home />
		// 	</View>
		// </View>
	);
}
