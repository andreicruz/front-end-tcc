import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, TouchableOpacity, Text} from 'react-native';
import { globalFonts } from '../../utils/globalStyles';
import { icons } from '../../utils/icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../home/home';
import CameraArea from '../cameraArea/cameraArea';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

export const Routes = (props) => {
    function teste() {
        alert('oi');
    }

    return (
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerStyle: [styles.shadow],
                headerTintColor: '#1b75bc',
                headerTitleStyle: {
                    alignSelf: 'center',
                    fontWeight: 'bold',                        
                },
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => props.navigation.openDrawer()}                        
                    >
                        <Text style={{marginLeft: 20}}>
                            <FontAwesomeIcon color={ globalFonts.blueText.color } icon={ icons.iconFaArrowLeft } size={ 20 } />
                        </Text>
                    </TouchableOpacity>
                ),
            }}
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Camera' component={CameraArea} />
        </Stack.Navigator>
    );
}

export const Menu = () => {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Routes}/>
            <Drawer.Screen name='Camera' component={CameraArea} />
        </Drawer.Navigator>
    );
}