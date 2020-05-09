import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';
import { globalFonts, globalAlignments, globalColors } from '../../utils/globalStyles';
import { icons } from '../../utils/icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Home from '../home/home';
import CameraArea from '../cameraArea/cameraArea';


const Stack = createStackNavigator();


export const styles = StyleSheet.create({

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        
        elevation: 13,
        backgroundColor: "white",    
    }
});

export default function Routes() {
    function teste() {
        alert('oi');
    }

    return (
        <NavigationContainer theme={{colors: {background: 'white'}}}>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerStyle: [styles.shadow],
                    headerTintColor: '#1b75bc',
                    headerTitleStyle: {
                        alignSelf: 'center',
                        fontWeight: 'bold',                        
                    },
                }}
            >
                <Stack.Screen name='Home' component={Home}
                    options={{
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => alert('This is a button!')}                        
                            >
                                <Text style={{marginLeft: 20}}>
                                    <FontAwesomeIcon color={ globalFonts.blueText.color } icon={ icons.iconFaArrowLeft } size={ 20 } />
                                </Text>
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Stack.Screen name='Camera' component={CameraArea} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}