
import { StyleSheet} from 'react-native';
import { globalFonts, globalColors } from '../../utils/globalStyles';

export const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250
    },
    borderAnswer: {
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: globalFonts.darkGrey.color,
        borderRadius: 6,
    },
    answer: {
        backgroundColor: "beige",
        borderRadius: 6,
        padding: 8,
    },
    roundedButton: {
        backgroundColor: globalColors.blueText.color,
        width: 100,
        height: 100,
        // borderRadius: 100,
        alignItems:'center',
        justifyContent:'center',
        // padding: 10,
        // alignItems: "center",
    },
    flag: {
        alignItems: 'center',
        bottom: "-40%",
        borderRadius: 6,
        justifyContent: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
    },
    activity: {
        alignItems: 'center',
        borderRadius: 6,
        bottom: 20,
        justifyContent: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
    },
});