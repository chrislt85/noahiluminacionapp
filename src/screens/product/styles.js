import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight,
    },
    productImage: {
        width: 200,
        height: 200,
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
        color: COLORS.text,
        marginBottom: 10,
    },
    description: {
        width: 350,
        textAlign: 'center',
        marginBottom: 10,
    },
    stock: {
        fontFamily: 'Raleway-Italic',
        fontSize: 16,
    },
    price: {
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
    },
    buttonBuy: {
        marginTop: 20,
    }, 
    textButtonBuy: {

    },
});