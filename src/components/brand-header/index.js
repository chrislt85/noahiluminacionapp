import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const BrandHeader = ({title}) => {
    return (
        <View style={styles.brandcontainer}>
            <Image
                source={require('../../../assets/logo.png')} 
                style={styles.brandimage} 
            />
            <Text style={styles.brandtitle}>{title}</Text>
        </View>
    );
}

export default BrandHeader;