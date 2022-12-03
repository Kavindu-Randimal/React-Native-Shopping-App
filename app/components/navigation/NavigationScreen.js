import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/loginscreen/LoginScreen";
import ProductsScreen from "../screens/productsscreen/ProductsScreen";
import ProfileScreen from "../screens/profilescreen/ProfileScreen";
import DetailsScreen from "../screens/detialscreen/DetailScreen";
import CartScreen from "../screens/cartscreen/CartScreen";
import CheckoutScreen from "../screens/checkoutscreen/CheckoutScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Example" component={Example} /> */}

        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
