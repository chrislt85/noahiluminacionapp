import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container:{
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    counterContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 5,
        width: 230,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        borderColor: COLORS.gray,
        borderWidth: 1,
    },
    buttonSubCount: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.primaryDark,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    textSubCount: {
        color: COLORS.white,
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
    },
    textCount: {
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
    },
    buttonAddCount: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.primaryDark,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    textAddCount: {
        color: COLORS.white,
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
    },

    buttonAddToCart: {
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        paddingHorizontal: 50,
        paddingVertical: 15,
        marginTop: 20,
    },
    textButtonAddToCart: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: 'Raleway-Regular',
    },
});