import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { router } from "expo-router";
import api from "../routes/api";
import { Alert } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Switch,
  ScrollView,
} from "react-native";
import { AxiosError } from "axios";

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

const getRandomUserId = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const CreerTonHeroScreen = () => {
  const [hero, setHero] = useState<Superhero>({
    id: 0,
    pseudo_name: "",
    real_name: "",
    gender: "",
    origin_planet: null,
    description: "",
    superpowers: [],
    city_of_protection: "",
    gadgets: [],
    team: null,
    vehicle: null,
    user_id: getRandomUserId(),
  });

  const [hasSuperpowers, setHasSuperpowers] = useState(false);
  const [hasGadgets, setHasGadgets] = useState(false);
  const [hasTeam, setHasTeam] = useState(false);
  const [hasVehicle, setHasVehicle] = useState(false);

  const handleChange = (name: keyof Superhero, value: string) => {
    setHero((prevHero) => ({ ...prevHero, [name]: value }));
  };

  const handleSuperpowersChange = (value: string) => {
    setHero((prevHero) => ({
      ...prevHero,
      superpowers: value.split(",").map((power) => power.trim()),
    }));
  };

  const handleGadgetsChange = (value: string) => {
    setHero((prevHero) => ({
      ...prevHero,
      gadgets: value.split(",").map((gadget) => gadget.trim()),
    }));
  };

  const handleSubmit = async () => {
    try {
      const heroData = {
        ...hero,
        superpowers: hasSuperpowers
          ? Array.isArray(hero.superpowers)
            ? hero.superpowers
            : [hero.superpowers]
          : [],
        gadgets: hasGadgets
          ? Array.isArray(hero.gadgets)
            ? hero.gadgets
            : [hero.gadgets]
          : [],
        team: hasTeam ? hero.team : null,
        vehicle: hasVehicle ? hero.vehicle : null,
        user_id: hero.user_id,
      };

      console.log("Données envoyées :", heroData);

      await api.post("/superheroes", heroData);
      Alert.alert("Succès", "Le héros a été créé avec succès !", [
        {
          text: "OK",
          onPress: () => router.push({ pathname: "../screens/listehero" }),
        },
      ]);
    } catch (err) {
      const error = err as AxiosError; // 👈 Cast du type 'unknown' en 'AxiosError'
      const errorMessage =
        error.response && typeof error.response.data === "object"
          ? (error.response.data as { message?: string }).message ||
            "Erreur inconnue"
          : "Une erreur est survenue lors de la création du héros.";

      console.error(
        "Erreur API :",
        error.response ? error.response.data : error.message
      );

      Alert.alert("Erreur", errorMessage);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.screenContainer}>
        <View style={styles.card}>
          <Text style={styles.formTitle}>Création de ton héro</Text>
          <TextInput
            style={styles.input}
            placeholder="Real Name"
            value={hero.real_name}
            onChangeText={(value) => handleChange("real_name", value)}
            placeholderTextColor={"#aaa"}
          />
          <TextInput
            style={styles.input}
            placeholder="Pseudo Name"
            value={hero.pseudo_name}
            onChangeText={(value) => handleChange("pseudo_name", value)}
            placeholderTextColor={"#aaa"}
          />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={hero.gender}
            onChangeText={(value) => handleChange("gender", value)}
            placeholderTextColor={"#aaa"}
          />
          <TextInput
            style={styles.input}
            placeholder="Origin Planet"
            value={hero.origin_planet || ""}
            onChangeText={(value) => handleChange("origin_planet", value)}
            placeholderTextColor={"#aaa"}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={hero.description}
            onChangeText={(value) => handleChange("description", value)}
            placeholderTextColor={"#aaa"}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="City of Protection"
            value={hero.city_of_protection}
            onChangeText={(value) => handleChange("city_of_protection", value)}
            placeholderTextColor={"#aaa"}
          />

          <View style={styles.switchContainer}>
            <Text>Has Superpowers</Text>
            <Switch value={hasSuperpowers} onValueChange={setHasSuperpowers} />
          </View>
          {hasSuperpowers && (
            <TextInput
              style={styles.input}
              placeholder="Superpowers (comma-separated)"
              value={hero.superpowers.join(", ")}
              onChangeText={(value) => handleSuperpowersChange(value)}
              placeholderTextColor={"#aaa"}
            />
          )}

          <View style={styles.switchContainer}>
            <Text>Has Gadgets</Text>
            <Switch value={hasGadgets} onValueChange={setHasGadgets} />
          </View>
          {hasGadgets && (
            <TextInput
              style={styles.input}
              placeholder="Gadgets (comma-separated)"
              value={hero.gadgets.join(", ")}
              onChangeText={(value) => handleChange("gadgets", value)}
              placeholderTextColor={"#aaa"}
            />
          )}

          <View style={styles.switchContainer}>
            <Text>Has Team</Text>
            <Switch value={hasTeam} onValueChange={setHasTeam} />
          </View>
          {hasTeam && (
            <TextInput
              style={styles.input}
              placeholder="Team"
              value={hero.team || ""}
              onChangeText={(value) => handleChange("team", value)}
              placeholderTextColor={"#aaa"}
            />
          )}

          <View style={styles.switchContainer}>
            <Text>Has Vehicle</Text>
            <Switch value={hasVehicle} onValueChange={setHasVehicle} />
          </View>
          {hasVehicle && (
            <TextInput
              style={styles.input}
              placeholder="Vehicle"
              value={hero.vehicle || ""}
              onChangeText={(value) => handleChange("vehicle", value)}
              placeholderTextColor={"#aaa"}
            />
          )}

          <Button
            title="Créer le héros"
            onPress={handleSubmit}
            color="#8B0000"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
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
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#A00000",
    borderRadius: 10,
    padding: 15,
    width: "90%",
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
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default CreerTonHeroScreen;
