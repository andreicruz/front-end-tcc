import React from 'react';
import { View } from 'react-native';
import Card from '../cards/card';
import * as homeCards from '../../model/menu';

const cards = homeCards.objects;

export default function Home() {
    return (
        <View>
            {cards.map(item => {
                return (<Card key={item.id} text={item.title} icon={item.icon} id={item.id} leftCard={item.leftCard}/>)
            })}
        </View>
    );
}