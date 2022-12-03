import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoriescontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight,
    },
    title: {
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
        color: COLORS.text,
        marginBottom: 10,
    },
    containerList: {
        flex: 1,
    }, 
});