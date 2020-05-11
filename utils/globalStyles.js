import { StyleSheet, Platform } from 'react-native';

export const globalAlignments = StyleSheet.create({
    flex: {
        flex: 1,
    },
    marginComponentToComponent: {
        marginTop: 40,
    },
    marginApp: {
        marginLeft: 20,
        marginRight: 20,
    },
    centerAll: {
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    darkGrey: {
        color: '#666666'
    },
    mediumGrey: {
        color: '#5e5e5e'
    },
    balooExtrabold: {
        fontFamily: 'Baloo-Tamma-Extrabold',
    },
    balooSemibold: {
        fontFamily: 'Baloo-Tamma-SemiBold',
    },
    // font: {
    //     fontFamily: 'BalooTamma2-Regular',
    // }
});