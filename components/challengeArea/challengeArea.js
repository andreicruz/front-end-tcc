import React, {useState, useEffect } from 'react';
import { View } from 'react-native';
import CardChallenge from '../cardsChallenge/cardsChallenge';
import { globalAlignments } from '../../utils/globalStyles';
import * as challengeCards from '../../model/challenges';
import { AsyncStorage } from 'react-native';

const cards = challengeCards.objects;

export default function ChallengeArea(props) {
    const [ hasDoneOneChallenge, setFirstTimeEntry ] = useState();
    const [ index, setIndex ] = useState(1);

    useEffect(() => {
        (async () => {
            // await removeAllKeys();
            await getAllKeys();
        })();

    });


    async function storeItem() {
        var value = null;
        try {
            await AsyncStorage.setItem(
                'hasDoneOneChallenge',
                'false'
            );
        } catch (error) {
          // Error retrieving data
        }
    };

    function changeStatusEntry(status) {
        setFirstTimeEntry(status);
    }


    async function removeAllKeys() {
        try {
            const value = await AsyncStorage.getAllKeys();
            AsyncStorage.multiRemove(value);
            console.log(value);
        } catch (error) {
          // Error retrieving data
        }
    }

    async function getAllKeys() {
        try {
            const value = await AsyncStorage.getAllKeys();
            const items = await AsyncStorage.multiGet(value);

            if(items.length === 0) {
                await storeItem();
                changeStatusEntry(false);
            } else if(items.length > 1) {
                createNewCards(items);
            }

        } catch (error) {
          // Error retrieving data
        }
    }

    function createNewCards(items) {
        cards.forEach(card => {
            card.challenges.forEach(challenge => {
                items.forEach(item => {
                    if(challenge.id == item[0].split('_')[1]) {
                        challenge.complete = true;
                    }
                })
            })
        })
    }

    return (
        <View style={[ globalAlignments.marginApp]}>
            {cards.map(item => {
                return (<CardChallenge key={item.id} navigation={props.navigation} object={item} isFirstEntry={hasDoneOneChallenge}/>)
            })}
        </View>
    );
}