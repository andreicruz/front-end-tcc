import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MyAppText from "../myAppText/text";
import { globalFonts, globalColors } from "../../utils/globalStyles";
import { icons } from "../../utils/icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function MyModal(props) {
    const [isRequesting, setRequestStatus] = useState(false);

    function handleRequestStatus(status) {
        setRequestStatus(status);
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{flexDirection: "row"}}>
                            <MyAppText fontType={globalFonts.balooExtrabold.fontFamily} text={props.modalTitle} fontSize={26} textColor={globalFonts.blackText.color}/>
                            <TouchableOpacity style={[styles.roundedButton, {bottom: 20, left: 30}]} onPress={() => props.closeFunction(false)}>
                                <Text style={{top: 2}}>
                                    <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaTimes } size={ 20 } />
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{textAlign: "justify"}}>
                            <MyAppText fontType={globalFonts.balooSemibold.fontFamily} text={props.modalText} fontSize={20} textColor={globalFonts.blackText.color}/>
                        </Text>
                        {props.buttonIsVisible ?
                            <View style={{flexDirection:"row", marginTop: 20}}>
                                <TouchableOpacity 
                                    style={{flex: 1, flexDirection: "row", backgroundColor: globalColors.blueText.color, padding: 10, borderRadius: 10, alignItems: "center", justifyContent: "center"}}
                                    onPress={() => {
                                        handleRequestStatus(true);
                                        props.buttonFunction.functionHandleModalButton({functionHandleRequestModal: handleRequestStatus})
                                    }}
                                >
                                    <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ props.buttonIcon } size={ 28 } />
                                    <View style={{marginLeft: 20, marginTop: 5}}>
                                        <MyAppText fontType={globalFonts.balooExtrabold.fontFamily} text={props.buttonTitle} fontSize={24} textColor={globalFonts.whiteText.color}/>
                                        {isRequesting ? 
                                            <View style={{flex: 1, justifyContent: "center", flexDirection: "row", bottom: 100}}>
                                                <ActivityIndicator size={90} color={globalColors.blueText.color}/>
                                            </View>
                                            :
                                            null
				                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                        }
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  roundedButton: {
    backgroundColor: globalColors.blueText.color,
    color: 'white',
    borderColor: 'white',
    borderRadius: 20,
    padding: 10,
},
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4
  },
});