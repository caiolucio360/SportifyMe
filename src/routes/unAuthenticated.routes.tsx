import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../pages/Home/index";
import GruposEmComum from "../pages/Grupos/index";
import Eventos from "../pages/Eventos/index";
import LoginScreen from "../pages/Login";

const Tab = createBottomTabNavigator();

export default function UnAuthenticated() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          tabBarLabel: "Início",
        }}
      />
    </Tab.Navigator>
  );
}
