import React from "react";
import { View, TouchableOpacity, Text} from 'react-native';

import { styles } from "./styles";

const ItemCount = ({ stock, initial, onAdd }) => {
    return (
        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <TouchableOpacity style={styles.buttonSubCount} onPress={() => null}>
                    <Text style={styles.textSubCount}>-</Text>    
                </TouchableOpacity>    
                <Text style={styles.textCount}>1</Text>
                <TouchableOpacity style={styles.buttonAddCount} onPress={() => null}>
                    <Text style={styles.textAddCount}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonAddToCart} onPress={() => null}>
                <Text style={styles.textButtonAddToCart}>Agregar al carrito</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ItemCount;