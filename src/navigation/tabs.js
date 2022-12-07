import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons }  from '@expo/vector-icons';
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import { COLORS } from "../constants/themes/colors";

const BottomTab = createBottomTabNavigator();

const Tab = () => {
    return (
        <BottomTab.Navigator 
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Raleway-Regular',
                    fontSize: 12,
                },
                tabBarActiveTintColor: COLORS.text,
                tabBarInactiveTintColor: COLORS.grey,
                tabBarStyle: {
                    paddingTop: 5,
                    paddingBottom: 10,
                    height: 60,
                }
            }}
        >
            <BottomTab.Screen name="ShopTab" component={ShopNavigator}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'home' : 'home-outline'}
                            size={22}
                            color={COLORS.primaryDark}
                         />
                    ),
                }}
            />
            <BottomTab.Screen name="CartTab" component={CartNavigator}
                options={{
                    title: 'Carrito',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'cart' : 'cart-outline'}
                            size={22}
                            color={COLORS.primaryDark}
                         />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

export default Tab;