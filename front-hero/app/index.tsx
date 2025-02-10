import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerScreenProps } from "@react-navigation/drawer";

export default function HomeScreen() {
  return (
    //<ImageBackground source={require("@/assets/images/superherophp.png")}>
    <View style={styles.container}></View>
    //</ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  /*header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#a00000",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },*/
  /*title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 30,
  },
  searchInput: { flex: 1, fontSize: 14, color: "black" },*/
});
