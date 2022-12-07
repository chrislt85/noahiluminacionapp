import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { COLORS } from "../constants/themes/colors";
import { Cart } from "../screens";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator 
            initialRoute="Cart"
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
            }}>
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrito',
                }}
            />
        </Stack.Navigator>
    );
};

export default CartNavigator;