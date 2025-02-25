import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import api from "@/routes/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  register: undefined;
  login: undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "login">;

interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (
    name: keyof RegistrationFormData,
    value: string
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const response = await api.post("/register", formData);
      console.log("User registered successfully:", response.data);
      Alert.alert("Success", "Registration successful!");
      navigation.navigate("Home");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const serverErrors = error.response.data.errors;
        const errorMessages = Object.values(serverErrors)
          .flat()
          .map((err) => String(err));
        setErrors(errorMessages);
      } else {
        setErrors(["An unexpected error occurred. Please try again."]);
      }
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formCard}>
        {errors.map((error, index) => (
          <Text key={index} style={styles.errorText}>
            {error}
          </Text>
        ))}

        <Text style={styles.formTitle}>INSCRIPTION</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={"#aaa"}
          value={formData.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#aaa"}
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"#aaa"}
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={"#aaa"}
          value={formData.password_confirmation}
          onChangeText={(text) =>
            handleInputChange("password_confirmation", text)
          }
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.loginLink}>
        Already have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          Log in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  formCard: {
    backgroundColor: "#A00000",
    borderRadius: 10,
    padding: 20,
    width: "70%",
    maxWidth: 400,
  },
  formTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
    width: "100%",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 5,
    width: "50%",
  },
  buttonText: {
    textAlign: "center",
    color: "#A00000",
    fontWeight: "bold",
  },
  loginLink: {
    color: "#000000",
  },
  link: {
    color: "#00e7fa",
    fontWeight: "bold",
  },
  errorText: {
    color: "#ffffff",
  },
});

export default RegisterScreen;
