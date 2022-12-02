import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function ProfileScreen({ navigation }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  console.log(data);

  const url = "https://dummyjson.com/users/1";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData([json]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <Text>Loading ...</Text>
      ) : (
        data.map((post) => (
          <View key={post.id}>
            <Image style={styles.productImage} source={post.image} />
            <View style={styles.detailView}>
              <View style={styles.rowText}>
                <FontAwesome
                  name="birthday-cake"
                  size={20}
                  color="black"
                  style={styles.icons}
                />
                <Text style={styles.boldText}>Birth Date - </Text>
                <Text style={styles.text}>{post.birthDate}</Text>
              </View>
              <View style={styles.rowText}>
                <MaterialCommunityIcons
                  name="gender-male"
                  size={24}
                  color="black"
                  style={styles.icons}
                />
                <Text style={styles.text}>{post.gender}</Text>
              </View>
              <View style={styles.rowText}>
                <MaterialIcons
                  name="call"
                  size={24}
                  color="black"
                  style={styles.icons}
                />
                <Text style={styles.text}>{post.phone}</Text>
              </View>
              <View style={styles.rowText}>
                <FontAwesome
                  name="graduation-cap"
                  size={21}
                  color="black"
                  style={styles.icons}
                />
                <Text style={styles.boldText}>Studies at - </Text>
                <Text style={styles.text}>{post.university}</Text>
              </View>
              <View style={styles.rowText}>
                <Ionicons
                  name="location-sharp"
                  size={24}
                  color="black"
                  style={styles.icons}
                />
                <Text style={styles.boldText}>From - </Text>
                <Text style={styles.text}>{post.address.city}</Text>
              </View>
              <View style={styles.rowText}>
                <FontAwesome
                  name="building"
                  size={25}
                  color="black"
                  style={styles.icons}
                />
                <Text style={styles.boldText}>Works at </Text>
                <Text style={styles.text}>{post.company.department}</Text>
              </View>
              <View style={styles.rowText}>
                <MaterialIcons
                  name="work"
                  size={24}
                  color="black"
                  style={styles.icons}
                />
                <Text style={styles.boldText}>Works as </Text>
                <Text style={styles.text}>{post.company.title}</Text>
              </View>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifycontent: "center",
    alignContent: "center",
    fontSize: 10,
  },

  detailView: {
    marginTop: "5%",
  },
  icons: {
    color: "black",
    marginLeft: "4%",
    padding: "3%",
  },
  text: {
    marginTop: "3%",
    fontSize: 20,
    fontFamily: "Bodoni 72 Oldstyle",
    fontWeight: "bold",
  },
  boldText: {
    marginTop: "3%",
    fontSize: 20,
    fontFamily: "Bodoni 72 Oldstyle",
  },
  description: {
    marginTop: "1%",
    fontSize: 18,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "5%",
  },

  productImage: {
    flex: 1,
    height: 200,
    width: 200,
    marginHorizontal: "22%",
    marginTop: "8%",
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 400 / 2,
  },

  rowText: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },

  feedback: {
    marginTop: 20,
    fontSize: 22,
    fontFamily: "Bodoni 72 Oldstyle",
    paddingLeft: "1%",
    paddingRight: "10%",
  },
});
export default ProfileScreen;
