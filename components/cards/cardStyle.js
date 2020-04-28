import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        borderColor: '#d6d6d6',
        borderWidth: 1,
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        height: 100,
    },
    item: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 40,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    cornerBorder: {
        backgroundColor: "#1b75bc",
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
        position: 'relative',
        width: 20,
    },
    iconBorder: {
        left: 5,
        position: 'absolute',
        // transform: [
        //     { translateX: 50 },
        //     { translateY:  50 },
        // ],
        top: 50
    }
});