import React from "react";
import { View, Text, Button } from "react-native";

import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const Products = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aquí va la lista de productos de la categoría seleccionada</Text>
            <Button
                title="Ver detalle"
                color={COLORS.primaryDark}
                onPress={() => navigation.navigate('Product')}
            />
        </View>
    )
}

export default Products;