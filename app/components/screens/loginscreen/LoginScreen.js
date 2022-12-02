import React, { useState, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomInput from "../../custominput/CustomInput";
import CustomButton from "../../custombutton/CustomButton";
import { AuthContext } from "../../../context/AuthContext";

function loginScreen(navigation) {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const val = useContext(AuthContext);

  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Practical Test</Text>

      <Text>{val}</Text>
      <CustomInput
        style={styles.textInput}
        placeholder="username"
        value={username}
        onchangeText={(text) => setUserName(text)}
      ></CustomInput>

      <CustomInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="password"
        value={password}
        onchangeText={(text) => setPassword(text)}
      ></CustomInput>

      <CustomButton
        onPress={() => {
          login(username, password);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifycontent: "center",
    alignContent: "center",
    fontSize: 10,
  },

  topic: {
    marginTop: "50%",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Bodoni 72 Oldstyle",
    marginVertical: "30%",
  },
});
export default loginScreen;
