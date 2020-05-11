import React from 'react';
import { Routes, Menu } from './components/routes/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NavigationContainer theme={{colors: {background: 'white'}}}>
			<StatusBar barStyle="light-content" />
			<Menu/>
		</NavigationContainer>
		// <View>			
		// 	<Header/>
		// 	<View style={globalAlignments.marginApp}>
		// 		<Home />
		// 	</View>
		// </View>
	);
}
