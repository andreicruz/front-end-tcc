import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    card: {
        borderColor: '#d6d6d6',
        borderWidth: 1,
        borderRadius: '6px',
        display: "flex",
        flexDirection: "row",
        height: '100px',
        padding: '10px',
    },
    item: {
        flex: 1,
    },
    rounded: {
        borderColor: '#d6d6d6',
        borderRadius: '10px',
        borderWidth: 1,
        height: '20px',
        width: '20px',
    }
});