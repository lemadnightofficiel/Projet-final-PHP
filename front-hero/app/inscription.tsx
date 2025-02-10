import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Inscription() {
  return (
    <View style={styles.formContainer}>
      <View style={styles.formCard}>
        <Text style={styles.formTitle}> Inscription</Text>
        <TextInput placeholder="Nom" style={styles.input} />
        <TextInput placeholder="Prénom" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Mot de passe"
          secureTextEntry
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },

  formCard: {
    backgroundColor: "#A00000",
    borderRadius: 10,
    padding: 15,
    width: "40%",
  },

  formTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 14,
  },
});
