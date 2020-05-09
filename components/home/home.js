import React from 'react';
import { View } from 'react-native';
import Card from '../cards/card';
import * as homeCards from '../../model/menu';
import { globalAlignments } from '../../utils/globalStyles';

const cards = homeCards.objects;

export default function Home() {
    return (
        <View style={[ globalAlignments.marginApp]}>
            {cards.map(item => {
                return (<Card key={item.id} text={item.title} icon={item.icon} id={item.id} leftCard={item.leftCard}/>)
            })}
        </View>
    );
}