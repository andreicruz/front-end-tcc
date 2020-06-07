import React from 'react';
import { View } from 'react-native';
import CardChallenge from '../cardsChallenge/cardsChallenge';
import { globalAlignments } from '../../utils/globalStyles';
import * as challengeCards from '../../model/challenges';

const cards = challengeCards.objects;

export default function ChallengeArea(props) {
    return (
        <View style={[ globalAlignments.marginApp]}>
            {cards.map(item => {
                return (<CardChallenge key={item.id} navigation={props.navigation} object={item}/>)
            })}
        </View>
    );
}