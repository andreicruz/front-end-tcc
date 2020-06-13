import React, { useEffect, useState} from 'react';
import MyAppText from '../myAppText/text';
import { View, Image, Text } from 'react-native';
import { globalFonts, globalAlignments, globalColors } from '../../utils/globalStyles';
import { styles } from './challengeStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icons } from '../../utils/icons';
import Paginator from '../paginator/paginator';
import * as challengeCards from '../../model/challenges';
import { AsyncStorage } from 'react-native';


export default function Challenge(props) {
    const cards = challengeCards.objects;
    const [challenge, setChallenge] = useState({});

    function handleClick(id) {
        let pages = [];
        cards.forEach(card => {
            card.challenges.forEach(challenge => {
                if(challenge.id === (id -1) || challenge.id === id) {
                    pages.push(challenge);
                }
            })
        });

        return pages
    }


    useEffect(() => {
        setChallenge(props.route.params.object);
    })

    function teste(){
        setChallenge(challenge.entry = 'PATO')
        setChallenge(challenge.isCorrect = true)
        // alert('p')
    }

    return (
        <View style={{flex: 1, marginTop: 40}}>
            <View style={[ globalAlignments.marginApp, { flex: 1,flexDirection: "column"}]}>
                <View>
                    <Image 
                        source={challenge.image}
                        style={styles.image}
                    />
                </View>
                <View style={[styles.borderAnswer, {marginTop: 20}]}>
                    <View style={{ padding: 40, flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.answer}>
                            {challenge.entry !== '' ?
                                <MyAppText text={challenge.entry} fontSize={22} textColor={globalFonts.blackText.color}/>
                                :
                                <MyAppText text={"RESPOSTA"} fontSize={22} textColor={globalFonts.blackText.color}/>                            
                            }

                        </View>
                        {challenge.isCorrect ?
                            <View style={
                                [
                                    styles.flag, 
                                    {
                                        backgroundColor:challenge.isCorrect? globalColors.green.color : globalColors.red.color
                                    }
                                ]}>
                                <MyAppText 
                                    text={
                                        challenge.isCorrect && challenge.entry !== '' ? 
                                        "CORRETO"
                                        :
                                        "INCORRETO"
                                    } 
                                    fontSize={22}
                                    textColor={ globalFonts.whiteText.color}/>
                            </View>
                            :
                            null
                        }
                    </View>
                </View>
                <TouchableOpacity style={{padding: 20, marginTop: 40, alignItems: "center", justifyContent: "center", backgroundColor: globalColors.blueText.color, borderRadius: 6}} onPress={() => teste()}>
                    <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaCamera } size={ 30 } />
                </TouchableOpacity>
            </View>
            <View>
                <Paginator object={challenge} navigation={props.navigation} findItem={handleClick}/>
            </View>
        </View>
    );
}