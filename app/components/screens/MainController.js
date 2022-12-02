import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import ProductsScreen from "./productsscreen/ProductsScreen";
import CartScreen from "./cartscreen/CartScreen";
import ProfileScreen from "./profilescreen/ProfileScreen";

//Screen names
const ProductName = "Product";
const CartName = "Cart";
const ProfileName = "Profile";

const Tab = createBottomTabNavigator();

function MainController() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ProductName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === ProductName) {
              iconName = focused ? "home" : "home";
            } else if (rn === CartName) {
              iconName = focused ? "notifications" : "home";
            } else if (rn === ProfileName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#c1d891",
          inactiveTintColor: "black",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: {
            padding: 10,
            // height: 100,
          },
        }}
      >
        <Tab.Screen name={ProductName} component={ProductsScreen} />
        <Tab.Screen name={CartName} component={CartScreen} />
        <Tab.Screen name={ProfileName} component={ProfileScreen} />\
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#c1d891",
  },
});
export default MainController;
