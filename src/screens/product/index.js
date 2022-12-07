import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { PRODUCTS } from '../../constants/data';
import { styles } from "./styles";

const Product = ({ navigation, route }) => {
    const { productId } = route.params;

    const filteredProduct = PRODUCTS.find((product) => product.id === productId);
    const { title, price, description, stock, pictureUrl } = filteredProduct || {};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image
                    source={{ uri: pictureUrl }} 
                    style={styles.productImage} 
            />
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.stock}>Stock: {stock}</Text>
            <Text style={styles.price}>${price}</Text>
            <TouchableOpacity style={styles.buttonBuy} onPress={() => null}>
                <Text style={styles.textButtonBuy}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Product;