import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import api from "../routes/api";

interface Superhero {
  id: number;
  real_name: string;
  pseudo_name: string;
  gender: string;
  origin_planet: string | null;
  description: string;
  superpowers: string[];
  city_of_protection: string;
  gadgets: string[];
  team: string | null;
  vehicle: string | null;
  user_id: number;
}

type RootStackParamList = {
  login: undefined;
  register: undefined;
  listedesheros: undefined;
  HeroCreation: undefined;
  HeroDetail: { id: number };
};

const ListHeroScreen = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const getAllSuperheroes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("/superheroes");
      setSuperheroes(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
      setError("Error fetching superheroes");
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      getAllSuperheroes();
    }, [getAllSuperheroes])
  );

  const handleHeroPress = (hero: Superhero) => {
    navigation.navigate("HeroDetail", { id: hero.id });
  };

  const renderHeroCard = ({ item }: { item: Superhero }) => (
    <TouchableOpacity
      style={styles.heroCard}
      onPress={() => handleHeroPress(item)}
    >
      <View style={styles.heroIcon} />
      <Text style={styles.heroName}>{item.pseudo_name}</Text>
      <Text style={styles.heroRealName}>{item.real_name}</Text>
      <Text style={styles.heroTeam}>{item.team || "No team"}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#A00000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={superheroes}
        renderItem={renderHeroCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.heroList}
        ListEmptyComponent={
          <Text style={styles.noHeroesText}>No superheroes found</Text>
        }
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("HeroCreation")}
      >
        <Ionicons name="add" size={30} color="white" />
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
    width: "45%",
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
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  heroRealName: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
  },
  heroTeam: {
    color: "white",
    fontSize: 12,
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
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  noHeroesText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default ListHeroScreen;
