import React from 'react';
import MyAppText from '../myAppText/text';
import { View, Image, Text } from 'react-native';
import { globalFonts, globalAlignments } from '../../utils/globalStyles';
import { styles } from './challengeStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icons } from '../../utils/icons';

export default function Challenge(props) {
    return (
        <View style={[ globalAlignments.marginApp]}>
            <View style={{flexDirection: "column"}}>
                <View>
                    <Image 
                        source={props.route.params.object.image}
                        style={styles.image}
                    />
                </View>
                <View style={styles.borderAnswer}>
                    <View style={{ padding: 20, flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.answer}>
                            <MyAppText text={"PATO"} fontSize={22} textColor={globalFonts.blackText.color}/>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 40, alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity style={[styles.roundedButton]}>
                        <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaCamera } size={ 30 } />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}