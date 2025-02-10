import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Mise à jour de l'import

type ListeHeroScreenProps = {
  navigation: any;
};

const heroes = [
  { id: "1", name: "Iron Man" },
  { id: "2", name: "Winter Soldier" },
  { id: "3", name: "Spider Man" },
  { id: "4", name: "Venom" },
];

const ListeHeroScreen: React.FC<ListeHeroScreenProps> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "LISTE DES HÉROS",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={heroes}
        numColumns={2}
        keyExtractor={(item) => item.id}
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
        onPress={() => navigation.navigate("Créer ton héros")}
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
