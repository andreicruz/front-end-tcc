import React from 'react';
import MyAppText from '../myAppText/text';
import { View } from 'react-native';
import { globalFonts } from '../../utils/globalStyles';

export default function Challenge(props) {
    return (
        <View>
            <MyAppText text={'Desafios:  ' + props.route.params.object.idDesafio} fontSize={22} textColor={globalFonts.blueText.color}/>
            <MyAppText text={'BEM VINDO ao desafio ' + props.route.params.object.id} fontSize={22} textColor={globalFonts.blueText.color}/>
        </View>
    );
}