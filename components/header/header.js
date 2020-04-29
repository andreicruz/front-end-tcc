import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './headerStyle';
import { icons } from '../../utils/icons';
import { globalAlignments, globalFonts } from '../../utils/globalStyles';
import { View, SafeAreaView, Text } from 'react-native';
import MyAppText from '../myAppText/text';

export default function Header() {
    return (
        <SafeAreaView style={globalAlignments.droidSafeArea}>
            <View style={styles.shadow}>
                <View style={styles.menu}>
                    <View style={styles.items}>
                        <FontAwesomeIcon color={ globalFonts.blueText.color } icon={ icons.iconFaBars } size={ 28 } />
                    </View>
                    <View style={styles.items}>
                        <Text style={globalAlignments.textToRight}>
                            <MyAppText text="Logo" fontSize={22} textColor={globalFonts.blueText.color}/>
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}