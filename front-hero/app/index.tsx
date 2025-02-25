import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "../screens/connexion";
import RegisterScreen from "@/screens/register";
import MainNavigator from "../types/MainNavigator";
import ListHeroScreen from "@/screens/listehero";
import HeroDetailScreen from "@/screens/HeroDetail";
import CreerTonHeroScreen from "@/screens/creation";

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      if (userToken) {
        setIsAuthenticated(true);
      }
    };
    checkAuthStatus();
  }, []);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="listedesheros"
            component={ListHeroScreen}
            options={{ title: "Liste des Héros" }}
          />
          <Stack.Screen
            name="HeroDetail"
            component={HeroDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="HeroCreation" component={CreerTonHeroScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
