import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BrandHeader, CategoryItem } from "../../components";
import { CATEGORIES } from '../../constants/data/index';

import { styles } from "./styles";

const Categories = ({ navigation }) => {
    const onSelected = (item) => {
        navigation.navigate('Products', { categoryId: item.id, title: item.title, color: item.color });
    };
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

    return (
        <SafeAreaView style={styles.container}>
            <BrandHeader title="Noah Iluminación" />
            <FlatList 
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.containerList}
            />
        </SafeAreaView>
    )
}

export default Categories;