import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
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

type HeroDetailRouteProp = RouteProp<
  { HeroDetail: { id: number } },
  "HeroDetail"
>;

const HeroDetailScreen = () => {
  const route = useRoute<HeroDetailRouteProp>();
  const navigation = useNavigation();
  const { id } = route.params;
  const [hero, setHero] = useState<Superhero | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroDetails = async () => {
      try {
        const response = await api.get(`/superheroes/${id}`);
        setHero(response.data);
        navigation.setOptions({ title: response.data.pseudo_name });
      } catch (error) {
        setError("Failed to load hero details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchHeroDetails();
    } else {
      setError("Invalid hero ID");
      setLoading(false);
    }
  }, [id, navigation]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#A00000" />
      </SafeAreaView>
    );
  }

  if (error || !hero) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{error || "Hero data not found"}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heroName}>{hero.pseudo_name}</Text>
        <Text style={styles.heroRealName}>{hero.real_name}</Text>
        <Text style={styles.heroDescription}>{hero.description}</Text>
        <Text style={styles.sectionTitle}>Superpowers:</Text>
        <Text style={styles.heroDetails}>{hero.superpowers.join(", ")}</Text>
        <Text style={styles.sectionTitle}>Gadgets:</Text>
        <Text style={styles.heroDetails}>{hero.gadgets.join(", ")}</Text>
        <Text style={styles.sectionTitle}>City of Protection:</Text>
        <Text style={styles.heroDetails}>{hero.city_of_protection}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    padding: 15,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  heroName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A00000",
  },
  heroRealName: {
    fontSize: 18,
    color: "#555",
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A00000",
    marginBottom: 5,
  },
  heroDetails: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default HeroDetailScreen;
