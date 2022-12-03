import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { BrandHeader, CategoryItem } from "../../components";
import { CATEGORIES } from '../../constants/data/index';
import { COLORS } from "../../constants/themes/colors";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
    const onSelected = (item) => {
        console.warn('onSelected', item);
    };
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
    return (
        <View style={styles.container}>
            <BrandHeader title="Noah Iluminación" />
            <FlatList 
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.containerList}
            />
            {/*<View style={styles.categoriescontainer}>
                <Text style={styles.title}>Aquí van las categorías (Carteles LED, lámparas, etc)...</Text>
                <Button
                    title="Productos"
                    color={COLORS.primaryDark}
                    onPress={() => navigation.navigate('Products')}
                />
            </View>*/}
        </View>
    )
}

export default Categories;