import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20, 
        marginVertical: 10,
        borderRadius: 10,
        height: 120,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderColor: COLORS.background,
        borderWidth: 2,
    },
    itemContainer: {
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
    stock: {
        fontFamily: 'Raleway-Italic',
        fontSize: 14,
    },
});