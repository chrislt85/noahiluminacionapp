import React from "react";
import { View, Text, Button } from "react-native";

import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Products = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aquí va la lista de productos de la categoría seleccionada</Text>
            <Button
                title="Ver detalle"
                color={colors.primaryDark}
                onPress={() => navigation.navigate('Product')}
            />
        </View>
    )
}

export default Products;