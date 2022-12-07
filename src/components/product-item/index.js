import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

const ProductItem = ({ item, onSelected, color }) => {
    return (
        <View style={{...styles.container, backgroundColor: color}}>
            <TouchableOpacity style={styles.item} onPress={() => onSelected(item)}>
                <Image source={{ uri: item.pictureUrl }} style={styles.itemImage} />
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.price}>${item.price}</Text>
                        <Text style={styles.stock}>Stock: {item.stock}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem;