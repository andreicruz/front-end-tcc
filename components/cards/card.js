import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './cardStyle';
import { icons } from '../../utils/icons';
import MyAppText from '../myAppText/text';
import { View, Text } from 'react-native';
import { globalFonts } from '../../utils/globalStyles';

export default function Card() {
    return (
        <View style={styles.card}>
            <View style={[styles.item, {flex: 1, flexDirection: "row"}]}>
                <View style={{width: 40}}>
                    <FontAwesomeIcon icon={ icons.iconFaCamera } size={ 22 } />
                </View>
                <View>
                    <MyAppText text="Usar a câmera" fontSize={22} textColor={globalFonts.blueText.color}/>
                </View>
            </View>
            <View style={styles.cornerBorder}>
                <Text style={styles.iconBorder}>
                    <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaArrowLeft } size={ 12 } />
                </Text>
            </View>
        </View>
    );
}