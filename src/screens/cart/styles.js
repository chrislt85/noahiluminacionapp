import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    footer: {
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: COLORS.primaryDark,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    buttonConfirm: {
        backgroundColor: COLORS.primaryDark,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textButtonConfirm: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: 'Raleway-Regular',
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'space-between',
    },
    textTotalTitle: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: 'Raleway-Regular',
    },
    textTotal: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: 'Raleway-Bold',
    },
});