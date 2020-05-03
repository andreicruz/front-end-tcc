import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from './cardStyle';
import { icons } from '../../utils/icons';
import MyAppText from '../myAppText/text';
import { View, Text } from 'react-native';
import { globalFonts } from '../../utils/globalStyles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card(props) {
    const RightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        
        return (
            <View style={[styles.rightAction, { borderRadius: 20 }]}>
                <View style={{flexDirection: "row", flex: 1}}>
                    <View style={[styles.leftCornerBorder, {justifyContent: "center"}]}>
                        <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaArrowRight } size={ 20 } />
                    </View>
                    <View style={{flex: 2, flexDirection: "column", marginLeft: 20, paddingVertical: 10}}>
                        <View>
                            <MyAppText fontType='Baloo-Tamma-SemiBold' text={props.leftCard.title} fontSize={20} textColor={globalFonts.darkGrey.color}/>
                        </View>
                        <View style={{flex: 1, flexDirection: "row"}}>
                            <Text style={{flex: 1, flexWrap: "wrap", textAlign: "left"}}>
                                <MyAppText fontType='Baloo-Tamma-Regular' text={props.leftCard.description} fontSize={14} textColor={globalFonts.darkGrey.color}/>
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <View style={styles.leftCardIcon}>
                            <TouchableOpacity style={styles.buttonIcon}>
                                <Text style={{textAlign: "center"}}>
                                    <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ props.icon } size={ 20 } />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };



    return (
        <View style={styles.card}>
           <Swipeable
            renderRightActions={RightActions}
           >
                <View style={{flexDirection: "row", backgroundColor: "white", borderRadius: 20}}>
                    <View style={{flexDirection: "row", flex: 1, paddingVertical: 40, paddingHorizontal: 40}}>
                        <View>
                            <FontAwesomeIcon color={globalFonts.blueText.color} icon={ props.icon } size={ 36 } />
                        </View>
                        <View style={{ marginTop: 5, marginLeft: 20 }}>
                            <MyAppText text={props.text} fontSize={22} textColor={globalFonts.blueText.color}/>
                        </View>
                    </View>
                    <View style={[styles.rightCornerBorder, {justifyContent: "center"}]}>
                        <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaArrowLeft } size={ 20 } />
                    </View>
                </View>
            </Swipeable>
        </View>
    );
}