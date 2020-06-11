import React from 'react';
import MyAppText from '../myAppText/text';
import { View, Image, Text } from 'react-native';
import { globalFonts, globalAlignments, globalColors } from '../../utils/globalStyles';
import { styles } from './challengeStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icons } from '../../utils/icons';
import Paginator from '../paginator/paginator';

export default function Challenge(props) {
    return (
        <View style={{flex: 1}}>
            <View style={[ globalAlignments.marginApp, { flex: 1,flexDirection: "column"}]}>
                <View>
                    <Image 
                        source={props.route.params.object.image}
                        style={styles.image}
                    />
                </View>
                <View style={styles.borderAnswer}>
                    <View style={{ padding: 40, flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.answer}>
                            <MyAppText text={"PATO"} fontSize={22} textColor={globalFonts.blackText.color}/>
                        </View>
                        <View style={
                            [
                                styles.flag, 
                                {
                                    backgroundColor: props.route.params.object.complete ? globalColors.green.color : globalColors.red.color
                                }
                            ]}>
                            <MyAppText text={"CORRETO"} fontSize={22} textColor={props.route.params.object.complete ? globalFonts.whiteText.color : "white"}/>
                        </View>
                    </View>
                </View>
                {/* <View style={{marginTop: 40, alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity style={[styles.roundedButton]}>
                        <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaCamera } size={ 30 } />
                    </TouchableOpacity>
                </View> */}
            </View>
            <View>
                <Paginator />
            </View>
        </View>
    );
}