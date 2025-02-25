import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/homescreen";
import ListeHeroScreen from "../screens/listehero";
import CreerTonHeroScreen from "../screens/creation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { MainStackParamList } from "./types";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "@/components/recherche";

type RootStackParamList = {
  Home: undefined;
  listedesheros: { searchQuery: string };
  HeroCreation: undefined;
};

type NavigationProp = DrawerNavigationProp<RootStackParamList>;
const Drawer = createDrawerNavigator<MainStackParamList>();

export default function MainNavigator() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation<NavigationProp>();
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    navigation.navigate("listedesheros", { searchQuery: query });
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        drawerStyle: { backgroundColor: "#A00000" },
        drawerLabelStyle: { color: "#fff" },
        headerRight: () => <SearchBar onSearch={handleSearch} />,
      }}
    >
      <Drawer.Screen
        name="Home"
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
        name="listedesheros"
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
        name="HeroCreation"
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
