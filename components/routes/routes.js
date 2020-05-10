import React, { useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { globalFonts, globalColors } from '../../utils/globalStyles';
import { icons } from '../../utils/icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
 } from '@react-navigation/drawer';
 import * as Font from 'expo-font';

import Home from '../home/home';
import CameraArea from '../cameraArea/cameraArea';
import { routes } from '../../utils/routeNames';


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
    },
    menu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    label: {
        fontSize: 20,
        color: globalColors.blueText.color,
    }
});

export const Routes = (props) => {
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
                            <FontAwesomeIcon color={ globalFonts.blueText.color } icon={ icons.iconFaBars } size={ 20 } />
                        </Text>
                    </TouchableOpacity>
                ),
            }}
        >
            <Stack.Screen name={routes[0].route} component={Home} options={{ title: routes[0].title }}/>
            <Stack.Screen name={routes[1].route} component={CameraArea} options={{ title: routes[1].title }}/>
        </Stack.Navigator>
    );
}

function CustomDrawerContent(props) {
    const [loadedFont, setFont] = useState(false);

	useEffect(() => {
		async function teste() {
			await Font.loadAsync({
				'Baloo-Tamma-SemiBold': require('../../assets/fonts/BalooTamma2-SemiBold.ttf'),
			});
			setFont(true);
		}
		teste();
	}, [])

    return (
        <DrawerContentScrollView {...props}>
            <View style={[styles.menu]}>
                <View style={{flexDirection: "row"}}>
                    <View style={{marginTop: 20}}>
                        <FontAwesomeIcon color={ globalFonts.blueText.color } icon={ icons.iconFaHome } size={ 30 } />
                    </View>
                    <View style={{marginTop: 10}}>
                        { loadedFont ? (
                            <DrawerItem label="Início" onPress={() => props.navigation.navigate(routes[0].route, { screen: 'Home' })} labelStyle={[styles.label, {fontFamily: 'Baloo-Tamma-SemiBold'}]}/>
                        ) : (
                            <DrawerItem label="Início" onPress={() => props.navigation.navigate(routes[0].route, { screen: 'Home' })} labelStyle={[styles.label]}/>
                        )}
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={{marginTop: 20}}>
                        <FontAwesomeIcon color={ globalFonts.blueText.color } icon={ icons.iconFaCamera } size={ 30 } />
                    </View>
                    <View style={{marginTop: 10}}>
                        { loadedFont ? (
                            <DrawerItem label="Câmera" onPress={() => props.navigation.navigate(routes[1].route)} labelStyle={[styles.label, {fontFamily: 'Baloo-Tamma-SemiBold'}]}/>
                        ) : (
                            <DrawerItem label="Câmera" onPress={() => props.navigation.navigate(routes[1].route)} labelStyle={[styles.label]}/>
                        )}                        
                    </View>
                </View>
            </View>
        </DrawerContentScrollView>
    );
  }

export const Menu = () => {
    return (
        <Drawer.Navigator initialRouteName='Routes' drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name='Home' component={Routes}/>
            {/* <Drawer.Screen name='Camera' component={CameraArea} /> */}
        </Drawer.Navigator>
    );
}