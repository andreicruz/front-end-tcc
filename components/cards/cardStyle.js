import { StyleSheet } from 'react-native';

const border = '#d6d6d6';

export const styles = StyleSheet.create({
    card: {
        borderColor: border,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 40,
    },
    item: {
        paddingBottom: 40,
        paddingTop: 40,
    },
    rightCornerBorder: {
        backgroundColor: "#1b75bc",
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 4,
    },
    leftCornerBorder: {
        backgroundColor: "#1b75bc",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 4,
    },
    rightAction: {
        justifyContent: 'center',
        flex: 1,
    },
    leftCardIcon: {
        marginHorizontal: 30, 
        width: 40, 
        height: 40, 
    },
    buttonIcon: {
        borderWidth: 1,
        borderColor: border,
        borderRadius: 40,
        padding: 10,
    }
});