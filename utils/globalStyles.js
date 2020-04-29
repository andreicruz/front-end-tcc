import { StyleSheet, Platform } from 'react-native';

export const globalAlignments = StyleSheet.create({
    flex: {
        flex: 1,
    },
    marginComponentToComponent: {
        marginTop: 45,
    },
    marginApp: {
        marginLeft: 20,
        marginRight: 20,
    },
    textToRight: {
        textAlign: "right"
    },
    textToCenter: {
        textAlign: "center"
    },
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
});

export const globalColors = StyleSheet.create({
    whiteText: {
        color: "white"
    },
    blueText: {
        color: "#1b75bc"
    }
});

export const globalFonts = StyleSheet.create({
    whiteText: {
        color: "white"
    },
    blueText: {
        color: "#1b75bc"
    },
    blackText: {
        color: "black"
    }
    // font: {
    //     fontFamily: 'BalooTamma2-Regular',
    // }
});