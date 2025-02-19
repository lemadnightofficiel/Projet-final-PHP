import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CreerTonHeroScreen = () => (
  <View style={styles.screenContainer}>
    <View style={styles.card}>
      <Text style={styles.formTitle}>Création de ton héro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        placeholderTextColor={"#aaa"}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        placeholderTextColor={"#aaa"}
      />
      <TextInput
        style={styles.input}
        placeholder="Superpouvoirs"
        placeholderTextColor={"#aaa"}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    backgroundColor: "#A00000",
    borderRadius: 10,
    padding: 15,
    width: "40%",
  },

  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default CreerTonHeroScreen;
