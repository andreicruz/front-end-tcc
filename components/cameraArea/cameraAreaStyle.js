
import { StyleSheet} from 'react-native';
import { globalColors, globalFonts } from '../../utils/globalStyles';

export const styles = StyleSheet.create({
    input: {
        borderColor: globalFonts.darkGrey.color,
        borderBottomWidth: 2, 
        color: globalColors.blueText.color,
        fontFamily: globalFonts.balooExtrabold.fontFamily,
        fontSize: 18,
        height: 35,
    },
    inputFocus: {
        borderColor: globalColors.blueText.color,
    }
});