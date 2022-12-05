import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants/themes/colors";
import { isAndroid } from "../../constants/utils/functions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    containerList: {
        flex: 1,
    }, 
});