import React, { useState, useEffect } from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";
import CreerTonHeroScreen from "./creation";

type RootStackParamList = {
  ListeHeroScreen: undefined;
  "Création de ton héro": undefined;
};

const API_BASE_URL = "http://127.0.0.1/api/api-rest";

type NavigationProop = StackNavigationProp<
  RootStackParamList,
  "ListeHeroScreen"
>;

type Superhero = {
  id: number;
  name: string;
};

const ListeHeroScreen: React.FC = () => {
  const navigation = useNavigation();
  const [heroes, setHeroes] = useState<Superhero[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({ title: "LISTE DES HÉROS" });

    const fetchHeroes = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/superheroes`);
        console.log(response.data);
        setHeroes(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des super-héros :",
          error
        );
        Alert.alert("Erreur", "Impossible de charger la liste des héros.");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#A00000" />
      </View>
    );
  }
  console.log(heroes);
  return (
    <View style={styles.container}>
      <FlatList
        data={heroes}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.heroCard}>
            <View style={styles.heroIcon} />
            <Text style={styles.heroName}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.heroList}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Création de ton héro")}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroList: {
    padding: 10,
  },
  heroCard: {
    backgroundColor: "#A00000",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: "center",
    width: "40%",
  },
  heroIcon: {
    backgroundColor: "#D9D9D9",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  heroName: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#A00000",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default ListeHeroScreen;
