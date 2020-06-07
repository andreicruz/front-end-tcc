import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import MyAppText from '../myAppText/text';
import { View,Text } from 'react-native';
import { styles } from './styles';
import { globalFonts } from '../../utils/globalStyles';
import { icons } from '../../utils/icons';
import ListChallenges from './listChallenges';

export default function CardChallenge(props) {
    return (
        <View style={styles.card}>
            <View style={{flexDirection: "row", backgroundColor: "white", borderRadius: 20}}>
                <View style={{flexDirection: "column", flex: 1, paddingVertical: 40, paddingHorizontal: 40}}>
                    <View>
                        <MyAppText text={props.object.title} fontSize={22} textColor={globalFonts.blueText.color}/>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        {props.object.challenges.map(challenge => {
                            return (<ListChallenges key={challenge.id} title={challenge.id}/>)
                        })}
                    </View>
                </View>
            </View>
        </View>
    );
}