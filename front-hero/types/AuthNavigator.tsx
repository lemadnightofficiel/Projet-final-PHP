/*import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/connexion";
import RegisterScreen from "../screens/register";
import { AuthStackParamList } from "./types";

const Stack = createStackNavigator<AuthStackParamList>();

interface AuthNavigatorProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthNavigator: React.FC<AuthNavigatorProps> = ({
  setIsAuthenticated,
}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login">
        {(props) => (
          <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />
        )}
      </Stack.Screen>
      <Stack.Screen name="register">
        {(props) => (
          <RegisterScreen {...props} setIsAuthenticated={setIsAuthenticated} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;*/
