import React from 'react';
import MyAppText from '../myAppText/text';
import { View } from 'react-native';
import { globalFonts, globalColors } from '../../utils/globalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { routes } from '../../utils/routeNames';
import * as challengeCards from '../../model/challenges';

const cards = challengeCards.objects;

export default function ListChallenges(props) {
    function navigate() {
        if(props.challenge.complete) {
            props.navigation.navigate(routes[4].route, {object: props.challenge})
        } else if(findPreviuoslyCard(props.challenge.id)) {
            props.navigation.navigate(routes[4].route, {object: props.challenge})
        } else if(props.challenge.id ){
            alert('n');
        }
    }

    function findPreviuoslyCard(id) {
        let previuosItem = null;
        cards.forEach(card => {
            card.challenges.forEach(challenge => {
                if(challenge.id === (id -1)) {
                    previuosItem = challenge.complete;
                }
            })
        });

        return previuosItem;
    }

    return (
        // <View style={{ borderWidth: 1, width: 40, height: 40, alignItems: "center", marginLeft: props.challenge.id === 1 ? 0 : 20, borderRadius: 22  }}>
        <TouchableOpacity onPress={() => navigate()}>
            <View style={{ 
                alignItems: "center",
                backgroundColor: props.challenge.complete ? globalColors.green.color : "white",
                borderWidth: props.challenge.complete ? 0 : 1,
                borderRadius: 22  ,
                height: 40,
                marginLeft: props.challenge.idDisplay === 1 ? 0 : 20,
                width: 40,
            }}>
                <MyAppText 
                    text={props.challenge.idDisplay} 
                    fontSize={22}
                    textColor={props.challenge.complete ? globalFonts.whiteText.color : globalFonts.blueText.color}
                />
            </View>
        </TouchableOpacity>
        // </View>
    );
}