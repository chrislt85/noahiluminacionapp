import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Categories, Product, Products} from '../screens';
import { COLORS } from "../constants/themes/colors";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRoute="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.backgroundDark,
                },
                headerTintColor: COLORS.text,
                headerTitleStyle:{
                    fontFamily: 'Raleway-Regular'
                },
                headerTitleAlign: 'center',
                headerBackTitle: '',
            }} 
        >
            <Stack.Screen 
                name="Categories" 
                component={Categories}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={Products} 
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
            <Stack.Screen 
                name="Product" 
                component={Product} 
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
        </Stack.Navigator>
    );
}

export default ShopNavigator;