import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Text, Image} from 'react-native';
import { globalAlignments, globalFonts, globalColors } from '../../utils/globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icons } from '../../utils/icons';
import * as Font from 'expo-font';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { captureRef } from 'react-native-view-shot';

import MyAppText from '../myAppText/text';
import { styles } from './cameraAreaStyle';
import { text } from '../../utils/texts';

import { routes } from '../../utils/routeNames';
import MyModal from '../modal/modal';

export default function AreaController(props) {
	const [value, setText] = useState(text.areaCamera.inputPlaceholder);
	const [modalText, setModalText] = useState('');
	const [isFocused, setFocus] = useState(false);
	const [uriImage, setImage] = useState(null);
    const [loadedFont, setFont] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

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
	
	function cameraHandler() {
		props.navigation.navigate(routes[2].route, { functionShowModal: showModal});
	}
	
	function showModal(file, base64) {
		setImage(file);
		callTextRecognition(file, base64);		
	}

	async function callTextRecognition(file, base64) {
		try {
			await fetch('http://192.168.0.103:3000/upload', {
				method: 'POST',
				headers: {
				  Accept: 'application/json',
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				  file: base64
				})
			})
			.then(response => response.json())
			.then(json => {
				setModalText(json.text)
				setModalVisible(true)
			})
		} catch (error) {
			return error;
		}
	}

    return (
		<>
			<View style={[globalAlignments.marginApp, globalAlignments.marginComponentToComponent]}>
				<View style={{ flexDirection: "column"}}>
					<TouchableOpacity style={{backgroundColor: globalColors.blueText.color, borderRadius: 10}}
						onPress={() => cameraHandler()}
					>
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
								<View style={{ flex: 1, marginTop: 5}}>
									<TextInput
										underlineColorAndroid="white"
										style={[styles.input, isFocused ? styles.inputFocus : styles.input]}
										onChangeText={text => setText(text)}
										onFocus={() => focusHandler()}
										value={value}
										underlineColorAndroid='rgba(0,0,0,0)'
									/>
								</View>
								<View style={{ marginLeft: 20 }}>
									<TouchableOpacity style={styles.buttonIcon}>
										<Text style={{textAlign: "center"}}>
											<FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaMicrophone } size={ 20 } />
										</Text>
									</TouchableOpacity>
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
				{modalVisible ? 
					<MyModal
						modalText={modalText}
						modalTitle={text.areaCamera.modalTitle}
						buttonIcon={text.areaCamera.buttonIcon}
						buttonTitle={text.areaCamera.buttonTitle} 
						modalVisible={modalVisible} 
						closeFunction={setModalVisible}
					/> 
					: 
					null
				}
          		{uriImage !== null ? 
					<Image
						source={{ uri: uriImage }}
						style={{ width: 300, height: 300 }}
						resizeMode="contain"
					/>
					:
					null
				}
			</View>
		</>
    );
}