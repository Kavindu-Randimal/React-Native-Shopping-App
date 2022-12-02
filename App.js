// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// import LoginScreen from "./app/screens/loginscreen/LoginScreen";
// import MainController from "./app/screens/MainController";

// import ProductsScreen from "./app/screens/productsscreen/ProductsScreen";
// import DetailsScreen from "./app/screens/detialscreen/DetailScreen";
// import CartScreen from "./app/screens/cartscreen/CartScreen";
import Navigation from "./app/components/navigation/NavigationScreen";
import { AuthProvider } from "./app/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </>
  );
}
export default App;
