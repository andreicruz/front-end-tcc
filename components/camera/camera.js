import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { styles } from './cameraStyle';
import { globalFonts, globalButtons } from '../../utils/globalStyles';
import { icons } from '../../utils/icons';

export default function CameraComponent(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const camera = useRef(null)
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    async function takePhoto(){
        const options = { quality: 0.5, base64: true, onPictureSaved: onPhotoTake  };
        const data = await camera.current.takePictureAsync(options);
    }

    function onPhotoTake(data, error) {
        if(data) {
            // console.log(data.uri);
            props.navigation.goBack();
            props.route.params.functionShowModal(data.uri);
        } 
        
        if(error) {
            console.log(error)
        }
    } 

    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={camera}>
                <View style={styles.camera}>
                    <TouchableOpacity
                        style={[globalButtons.roundedButton, {alignSelf: "flex-end", alignItems: "center"}]}
                        onPress={() => takePhoto()}
                    >
                        <FontAwesomeIcon color={ globalFonts.blueText.color } icon={ icons.iconFaCamera } size={ 20 } />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[globalButtons.roundedButton, {alignSelf: "flex-end", alignItems: "center", marginLeft: 40  }]}
                        onPress={() => {
                            setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                    }}>
                        <FontAwesomeIcon color={ globalFonts.blueText.color } icon={ icons.iconFaRedo } size={ 20 } />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}