import React from 'react';
import { View, Text, Button} from 'react-native';

export default function AreaController(props) {
    return (
        <View>
            <Text>Ola</Text>
            <View style={{marginTop: 40}}>
                <Button
                    onPress={() => props.navigation.navigate('Home')}
                    title="Go to Home"
                />
            </View>
        </View>
    );
}