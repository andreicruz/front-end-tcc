import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    card: {
        borderColor: '#d6d6d6',
        borderWidth: 1,
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        height: 100,
        padding: 10,
    },
    item: {
        flex: 1,
    },
    rounded: {
        borderColor: '#d6d6d6',
        borderRadius: 10,
        borderWidth: 1,
        height: 20,
        width: 20,
    }
});