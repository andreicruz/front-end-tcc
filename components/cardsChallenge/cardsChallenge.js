import React from 'react';
import MyAppText from '../myAppText/text';
import { View,Text } from 'react-native';
import { styles } from './styles';
import { globalFonts } from '../../utils/globalStyles';
import ListChallenges from './listChallenges';

export default function CardChallenge(props) {
    return (
        <View style={styles.card}>
            <View style={{flexDirection: "row", backgroundColor: "white", borderRadius: 20}}>
                <View style={{flexDirection: "column", flex: 1, padding: 35}}>
                    <View>
                        <MyAppText text={props.object.title} fontSize={22} textColor={globalFonts.blueText.color}/>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        {props.object.challenges.map(challenge => {
                            return (<ListChallenges key={challenge.id} navigation={props.navigation} challenge={challenge} isFirstEntry={props.isFirstEntry}/>)
                        })}
                    </View>
                </View>
            </View>
        </View>
    );
}