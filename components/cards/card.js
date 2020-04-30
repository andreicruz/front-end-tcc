import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './cardStyle';
import { icons } from '../../utils/icons';
import MyAppText from '../myAppText/text';
import { View } from 'react-native';
import { globalFonts } from '../../utils/globalStyles';

export default function Card() {
    return (
        <View style={ styles.card }>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={[styles.item, { flex: 1, flexDirection: "row", paddingLeft: 40 }]}>
                    <View>
                        <FontAwesomeIcon color={globalFonts.blueText.color} icon={ icons.iconFaCamera } size={ 36 } />
                    </View>
                    <View style={{ marginTop: 5, marginLeft: 15 }}>
                        <MyAppText text="Usar a câmera" fontSize={22} textColor={globalFonts.blueText.color}/>
                    </View>
                </View>
                <View style={[styles.cornerBorder, {flex: 0.1}]}>
                    <View style={[styles.item, { marginTop: 10, paddingLeft: 3 }]}>
                        <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaArrowLeft } size={ 20 } />
                    </View>
                </View>
            </View>
        </View>
    );
}