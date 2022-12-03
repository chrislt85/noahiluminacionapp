import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    brandcontainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    brandimage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    brandtitle: {
        fontFamily: 'Raleway-BoldItalic',
        fontSize: 22,
        color: COLORS.white,
    },
});