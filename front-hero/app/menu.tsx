import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, TextInput, View } from "react-native";
import HomeScreen from "./index";
import ListeHeroScreen from "./listehero";
import CreerTonHeroScreen from "./creation";

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
          title: "SUPERHERO",
          headerStyle: {
            backgroundColor: "#A00000",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="Liste des héros"
        component={ListeHeroScreen}
        options={{
          title: "LISTE DES HÉROS",
          headerStyle: {
            backgroundColor: "#A00000",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="Création de ton héro"
        component={CreerTonHeroScreen}
        options={{
          title: "CRÉE TON HÉRO",
          headerStyle: { backgroundColor: "#A00000" },
          headerTitleStyle: { fontWeight: "bold", color: "white" },
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
