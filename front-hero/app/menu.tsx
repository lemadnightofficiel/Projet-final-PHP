import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./index";
import ListeHeroScreen from "./listehero";

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator
      initialRouteName="Accueil"
      screenOptions={{
        //headerStyle: { backgroundColor: "#a00000" },
        headerTintColor: "#fff",
        //headerTitle: "SUPERHERO",
        //headerTitleAlign: "center",
        //headerTitleStyle: { fontWeight: "bold" },
        drawerStyle: { backgroundColor: "#A00000" },
        drawerLabelStyle: { color: "#fff" },
        headerRight: () => (
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={18}
              color="#555"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder=" Recherche"
              placeholderTextColor="#555"
            />
          </View>
        ),
      }}
    >
      <Drawer.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          title: "SUPERHERO", // Affiche SUPERHERO dans la barre
          headerStyle: {
            backgroundColor: "#A00000", // Couleur de la barre
          },
          headerTitleStyle: {
            fontWeight: "bold", // Titre en gras
            color: "white", // Couleur du titre
          },
        }}
      />
      <Drawer.Screen
        name="Liste des héros"
        component={ListeHeroScreen}
        options={{
          title: "LISTE DES HÉROS", // Affiche LISTE DES HÉROS dans la barre
          headerStyle: {
            backgroundColor: "#A00000", // Couleur de la barre
          },
          headerTitleStyle: {
            fontWeight: "bold", // Titre en gras
            color: "white", // Couleur du titre
          },
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 30,
    marginRight: 15,
  },
  searchInput: { flex: 1, fontSize: 14, color: "black", fontStyle: "italic" },
  searchIcon: {
    marginLeft: 5,
  },
});
