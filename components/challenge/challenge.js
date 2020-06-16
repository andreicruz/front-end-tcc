import React, { useEffect, useState} from 'react';
import MyAppText from '../myAppText/text';
import { View, Image, ActivityIndicator } from 'react-native';
import { globalFonts, globalAlignments, globalColors } from '../../utils/globalStyles';
import { styles } from './challengeStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icons } from '../../utils/icons';
import Paginator from '../paginator/paginator';
import * as challengeCards from '../../model/challenges';
import { AsyncStorage } from 'react-native';
import { routes } from '../../utils/routeNames';

export default function Challenge(props) {
    const cards = challengeCards.objects;
    const [challenge, setChallenge] = useState({});
    const [isRequesting, setRequestStatus] = useState(false);

    useEffect(() => {
        setChallenge(props.route.params.object);
    })

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

    async function callTextRecognition(file, base64) {
		setRequestStatus(true);
		// props.route.params.functionHandleStatusRequestion(true);
		try {
			await fetch('http://192.168.0.103:3000/optical', {
				method: 'POST',
				headers: {
				  Accept: 'application/json',
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				  file: base64
				})
			})
			.then(response => response.json())
			.then(json => {
                verifyAnswer(json.data);
                setRequestStatus(false);
			})
		} catch (error) {
			setRequestStatus(false);
			return error;
		}
	}

	function cameraHandler() {
		props.navigation.navigate(routes[2].route, { functionShowModal: callTextRecognition});
    }
    
    async function verifyAnswer(answer){
        let newAnswer = answer.toUpperCase().replace(/(\r\n|\n|\r)/gm, "");

        if(newAnswer === challenge.answer) {
            setChallenge(challenge.entry = newAnswer);
            setChallenge(challenge.isCorrect = true);
            setChallenge(challenge.complete = true);

            var storeIndex = challenge.id.toString();
            await storeItem(storeIndex);
        } else {
            setChallenge(challenge.entry = newAnswer);
            setChallenge(challenge.isCorrect = false);
            setChallenge(challenge.false = true);
        }
    }

    async function storeItem(id) {
        try {
            await AsyncStorage.setItem(
                'desafio_',
                id
            );
        } catch (error) {
          // Error retrieving data
        }
    };

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
                        {isRequesting ? 
                            <View style={ styles.activity}>
                                <ActivityIndicator size={90} color={globalColors.blueText.color}/>
                            </View>
                            : 
                            null
                        }
                        {challenge.entry !== '' ?
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
                <TouchableOpacity 
                    style={{padding: 20, marginTop: 40, alignItems: "center", justifyContent: "center", backgroundColor: globalColors.blueText.color, borderRadius: 6}}
                    onPress={() => cameraHandler()}
                    >
                    <FontAwesomeIcon color={ globalFonts.whiteText.color } icon={ icons.iconFaCamera } size={ 30 } />
                </TouchableOpacity>
            </View>
            <View>
                <Paginator object={challenge} navigation={props.navigation} findItem={handleClick}/>
            </View>
        </View>
    );
}