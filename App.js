import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/header/header.js';
import { globalAlignments } from './utils/globalStyles';
import MyAppText from './components/myAppText/text';
import Card from './components/cards/card';

export default function App() {
	return (
		<View>			
			<Header/>
			<View style={globalAlignments.marginApp}>
				<View style={globalAlignments.marginApp, globalAlignments.marginComponentToComponent}>
					<Card></Card>
				</View>
			</View>
		</View>
	);
}
