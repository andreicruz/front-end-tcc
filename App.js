import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header.js';
import { globalStyles } from './utils/globalStyles';

export default function App() {
	return (
		<View>
			<Header/>
			<View style={globalStyles.margin_app}>
				<View style={globalStyles.margin_app, globalStyles.marginComponentToComponent}>      
					<Text>Open up App.js to start working on your app!</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
