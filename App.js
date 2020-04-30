import React from 'react';
import { View } from 'react-native';
import Header from './components/header/header.js';
import { globalAlignments } from './utils/globalStyles';
import Home from './components/home/home';


export default function App() {
	return (
		<View>			
			<Header/>
			<View style={globalAlignments.marginApp}>
				<View>
					<Home />
				</View>
			</View>
		</View>
	);
}
