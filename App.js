import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/header/header.js';
import { globalAlignments } from './utils/globalStyles';
import MyAppText from './components/myAppText/text';

export default function App() {
	return (
		<View>			
			<Header/>
			<View style={globalAlignments.marginApp}>
				<View style={globalAlignments.marginApp, globalAlignments.marginComponentToComponent}>
					<MyAppText text="Open up App.js to start working on your app!" />
				</View>
			</View>
		</View>
	);
}
