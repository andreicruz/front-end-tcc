import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import MyAppText from "../myAppText/text";
import { globalFonts, globalButtons, globalColors } from "../../utils/globalStyles";
import { icons } from "../../utils/icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function MyModal(props) {
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
                            <MyAppText fontType={globalFonts.balooExtrabold.fontFamily} text={'Texto Reconhecido'} fontSize={26} textColor={globalFonts.blackText.color}/>
                            <TouchableOpacity style={[styles.roundedButton, {bottom: 20, left: 30}]} onPress={() => props.closeFunction(false)}>
                                <Text style={{top: 2}}>
                                    <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaTimes } size={ 20 } />
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{textAlign: "justify"}}>
                            <MyAppText fontType={globalFonts.balooSemibold.fontFamily} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed metus auctor, sollicitudin quam et, lobortis '} fontSize={20} textColor={globalFonts.blackText.color}/>
                        </Text>
                        <View style={{flexDirection:"row", marginTop: 20}}>
                            <TouchableOpacity style={{flex: 1, flexDirection: "row", backgroundColor: globalColors.blueText.color, padding: 10, borderRadius: 10, alignItems: "center", justifyContent: "center"}}>
                                <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaBullhorn } size={ 28 } />
                                <View style={{marginLeft: 20, marginTop: 5}}>
                                    <MyAppText fontType={globalFonts.balooExtrabold.fontFamily} text={'Escutar'} fontSize={24} textColor={globalFonts.whiteText.color}/>
                                </View>
                            </TouchableOpacity>
                        </View>
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
    elevation: 5
  },
});