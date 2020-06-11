import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './paginatorStyle';
import { globalColors, globalFonts } from '../../utils/globalStyles';
import { routes } from '../../utils/routeNames';

export default function Paginator(props) {
    const [ pages ] = useState([1, 2, 3, 4, 5]);
    const [ teste ] = useState({answer: "GANSO",
    challengeId: 1,
    complete: false,
    id: 2,
    idDisplay: 2});
    return (
        <View style={{padding: 20, justifyContent: "center", alignItems: "center"}}>
            <View style={{ flexDirection: "row" }}>
                {pages.map(page => {
                    return (
                        <View key={page} style={{borderWidth: 1, borderColor: "#9c9a9a", padding: 2, borderRadius: 20, marginHorizontal: 3}}>
                            <TouchableOpacity 
                                style={{ 
                                    backgroundColor: props.object.id === page ? globalColors.green.color : globalFonts.whiteText.color, 
                                    height: 20, 
                                    width: 20, 
                                    borderRadius: 20
                                }}
                                onPress={() =>  props.navigation.navigate(routes[4].route, {object: teste})}
                            />
                        </View>
                    )
                })}
            </View>
        </View>
    );
}