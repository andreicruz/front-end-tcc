import React from 'react';
import MyAppText from '../myAppText/text';
import { View } from 'react-native';
import { globalFonts } from '../../utils/globalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { routes } from '../../utils/routeNames';

export default function ListChallenges(props) {
    return (
        <View style={{ borderWidth: 1, width: 40, height: 40, alignItems: "center", marginLeft: props.challenge.id === 1 ? 0 : 20, borderRadius: 22  }}>
            <TouchableOpacity onPress={() => props.navigation.navigate(routes[4].route, {object: props.challenge})}>
                <MyAppText text={props.challenge.id} fontSize={22} textColor={globalFonts.blueText.color}/>
            </TouchableOpacity>
        </View>
    );
}