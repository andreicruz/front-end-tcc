import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './headerStyle';
import { icons } from '../../utils/icons';
import { globalAlignments, globalColors, whiteIcon } from '../../utils/globalStyles';
import { Text, View } from 'react-native';

export default function Header() {
    return (
        <View>
            <View style={styles.menu}>
                <View style={styles.items}>
                    <FontAwesomeIcon color={ whiteIcon } icon={ icons.iconFaBars } />
                </View>
                <View style={styles.items}>
                    <Text style={[globalAlignments.textToRight, globalColors.whiteText]}>Logo</Text>
                </View>
            </View>
        </View>
    );
}