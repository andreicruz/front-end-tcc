import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './cardStyle';
import { icons } from '../../utils/icons';
import MyAppText from '../myAppText/text';
import { View, Text } from 'react-native';
import { globalAlignments } from '../../utils/globalStyles';

export default function Card() {
    return (
        <View style={styles.card}>
            <View style={styles.item}>
                <MyAppText text="Usar a câmera" />
            </View>
            {/* <View style={styles.item}>
                <View style={styles.rounded}>                    
                    <Text style={globalAlignments.textToCenter}>
                        <FontAwesomeIcon icon={ icons.iconFaCamera } size={ 20 } />
                    </Text>
                </View>
            </View> */}
            <View>
                <View style={styles.rounded}>
                    <Text style={globalAlignments.textToCenter}>
                        <FontAwesomeIcon icon={ icons.iconFaCamera } size={ 16 } />
                    </Text>
                </View>
            </View>
        </View>
    );
}