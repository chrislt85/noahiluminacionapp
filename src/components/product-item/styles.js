import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20, 
        marginVertical: 10,
        borderRadius: 10,
        //backgroundColor: COLORS.backgroundLight,
        height: 120,
    },
    item: {
        flex: 1,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'Raleway-Regular',
        fontSize: 16,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontFamily: 'Raleway-Bold',
        fontSize: 18,
    },
    weight: {
        fontFamily: 'Raleway-Italic',
        fontSize: 14,
    },
});