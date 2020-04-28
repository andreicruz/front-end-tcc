import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './headerStyle';
import { icons } from '../../utils/icons';
import { globalAlignments, globalFonts } from '../../utils/globalStyles';
import { View, SafeAreaView } from 'react-native';
import MyAppTextHeader from '../myAppText/textHeader';

export default function Header() {
    return (
        <SafeAreaView style={globalAlignments.droidSafeArea}>
            <View>
                <View style={styles.menu}>
                    <View style={styles.items}>
                        <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaBars } size={ 28 } />
                    </View>
                    <View style={styles.items}>
                        <MyAppTextHeader text="Logo"/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}