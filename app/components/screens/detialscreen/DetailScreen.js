import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  onPress,
  title,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import iphonexs from "../../../../app/assets/iphonexs.jpeg";
import Slider from "@react-native-community/slider";

function DetailsScreen({ navigation }) {
  const [range, setRange] = useState("10");
  const [sliding, setSliding] = useState("1");
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image style={styles.productImage} source={iphonexs}></Image>
          <Text style={styles.title}>iPhone 9</Text>
          <Text style={styles.description}>
            An apple which is nothing like apple
          </Text>
          <View style={styles.rowText}>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.price}>100$</Text>
          </View>
          <View style={styles.rowText}>
            <Text style={styles.feedback}>Feedback</Text>
            <Text style={styles.feedback}>100$</Text>
          </View>
          <View style={styles.rowText}>
            <Text style={styles.quantity}>Quantity</Text>
          </View>

          <View style={styles.rowText}>
            <Text style={styles.feedback}>{sliding}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={1}
              onValueChange={(value) => setRange(parseInt(value))}
              onSlidingStart={() => setSliding("10")}
              onSlidingComplete={() => setSliding("1")}
            ></Slider>
            <Text style={styles.feedback}>{range}</Text>
          </View>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Add To Cart</Text>
          </Pressable>
        </View>
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
    marginTop: "10%",
    fontSize: 28,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "8%",
    fontWeight: "bold",
  },

  description: {
    marginTop: "1%",
    fontSize: 22,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "10%",
  },

  slider: {
    alignItems: "center",
    alignContent: "center",
    width: 180,
  },
  price: {
    marginTop: "15%",
    fontSize: 22,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  feedback: {
    marginTop: "5%",
    fontSize: 22,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  quantity: {
    flex: 1,
    alignContent: "center",
    textAlign: "center",
    marginTop: "15%",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Bodoni 72 Oldstyle",
  },

  productImage: {
    flex: 1,
    height: 200,
    width: 320,
    marginHorizontal: "7%",
    marginTop: "8%",
    borderWidth: 0.2,
    borderColor: "black",
  },

  rowText: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  hrPoint: {
    marginHorizontal: 35,
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
export default DetailsScreen;
