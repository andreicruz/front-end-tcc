import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/header/header.js';
import { globalAlignments } from './utils/globalStyles';

export default function App() {
	return (
		<View>
			<Header/>
			<View style={globalAlignments.marginApp}>
				<View style={globalAlignments.marginApp, globalAlignments.marginComponentToComponent}>      
					<Text>Open up App.js to start working on your app!</Text>
				</View>
			</View>
		</View>
	);
}
