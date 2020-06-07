import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import MyAppText from '../myAppText/text';
import { View,Text } from 'react-native';
import { globalFonts } from '../../utils/globalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ListChallenges(props) {
    return (
        <View style={{ borderWidth: 1, width: 40, height: 40, alignItems: "center", marginLeft: props.title === 1 ? 0 : 20, borderRadius: 22  }}>
            <TouchableOpacity>
                <MyAppText text={props.title} fontSize={22} textColor={globalFonts.blueText.color}/>
            </TouchableOpacity>
        </View>
    );
}