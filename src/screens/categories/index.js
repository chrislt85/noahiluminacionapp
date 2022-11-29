import React from "react";
import { View, Text, Button, Image } from "react-native";
import { BrandHeader } from "../../components";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Categories = ({navigation}) => {
    return (
        <View style={styles.container}>
            <BrandHeader title="Noah Iluminación" />
            <View style={styles.categoriescontainer}>
                <Text style={styles.title}>Aquí van las categorías (Carteles LED, lámparas, etc)...</Text>
                <Button
                    title="Productos"
                    color={colors.primaryDark}
                    onPress={() => navigation.navigate('Products')}
                />
            </View>
        </View>
    )
}

export default Categories;