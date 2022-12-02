import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import iphonexs from "../../../../app/assets/iphonexs.jpeg";
import Slider from "@react-native-community/slider";

// export default function DetailsScreen({navigation})
function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View> */}
        <View style={styles.rowText}>
          <Image style={styles.productImage} source={iphonexs}></Image>
          <Text style={styles.title}>iPhone 9</Text>
          <Text style={styles.feedback}>100$</Text>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: "center",
    alignContent: "center",
    fontSize: 10,
  },

  title: {
    marginTop: "15%",
    fontSize: 18,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "8%",
    fontWeight: "bold",
  },

  price: {
    marginTop: "15%",
    fontSize: 22,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  feedback: {
    marginTop: "15%",
    fontSize: 22,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "10%",
    // paddingRight: "10%",
  },

  productImage: {
    flex: 1,
    height: 100,
    width: 150,
    marginHorizontal: "7%",
    marginTop: "13%",
    borderWidth: 0.2,
    borderColor: "black",
  },

  rowText: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  hrPoint: {
    marginHorizontal: 5,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#6558f5",
    width: "90%",
    height: 42,
    marginHorizontal: "5%",
    marginTop: "15%",
  },
  text: {
    fontSize: 18,
    letterSpacing: 0.25,
    color: "white",
  },
});
export default CartScreen;
