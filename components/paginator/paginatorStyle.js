
import { StyleSheet} from 'react-native';
import { globalColors } from '../../utils/globalStyles';

export const styles = StyleSheet.create({
    roundedPagination: {
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: globalColors.green.color,
        borderRadius: 22  ,
        height: 30,
        width: 30,
    },
});