import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput} from 'react-native';
import { globalAlignments, globalFonts, globalColors } from '../../utils/globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icons } from '../../utils/icons';
import * as Font from 'expo-font';

import MyAppText from '../myAppText/text';
import { styles } from './cameraAreaStyle';
import { text } from '../../utils/texts';

export default function AreaController(props) {
    const [value, setText] = useState(text.areaCamera.inputPlaceholder);
    const [isFocused, setFocus] = useState(false);

    const [loadedFont, setFont] = useState(false);

	useEffect(() => {
		async function teste() {
			await Font.loadAsync({
				'Baloo-Tamma-Regular': require('../../assets/fonts/BalooTamma2-Regular.ttf'),
				'Baloo-Tamma-Bold': require('../../assets/fonts/BalooTamma2-Bold.ttf'),
				'Baloo-Tamma-SemiBold': require('../../assets/fonts/BalooTamma2-SemiBold.ttf'),
				'Baloo-Tamma-Extrabold': require('../../assets/fonts/BalooTamma2-ExtraBold.ttf'),
			});
			setFont(true);
		}
		teste();
	}, [])

    function focusHandler() {
        setFocus(true);
        setText('');
    }

    return (
        <View style={[globalAlignments.marginApp, globalAlignments.marginComponentToComponent]}>
            <View style={{ flexDirection: "column"}}>
                <TouchableOpacity style={{backgroundColor: globalColors.blueText.color, borderRadius: 20}}>
                    <View style={[globalAlignments.centerAll, { paddingVertical: 30 }]}>
                        <View>
                            <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaCamera } size={ 40 } />
                        </View>
                        <View style={{ marginTop: 20}}>
                            <MyAppText fontType={globalFonts.balooSemibold.fontFamily} text={text.areaCamera.title} fontSize={22} textColor={globalFonts.whiteText.color}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 20}}>
                    { loadedFont ? (
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <FontAwesomeIcon color={ globalFonts.blueText.color } icon={ icons.iconFaCamera } size={ 40 } />
                            </View>
                            <View>
                                <TextInput
                                    underlineColorAndroid="white"
                                    style={[styles.input, isFocused ? styles.inputFocus : styles.input]}
                                    onChangeText={text => setText(text)}
                                    onFocus={() => focusHandler()}
                                    value={value}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                />
                            </View>
                        </View>
			        ) : (
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1}}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
			        )}
                </View>
            </View>
        </View>
    );
}