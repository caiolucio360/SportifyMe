import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../pages/Home/index";
import GruposEmComum from "../pages/Grupos/index";
import Eventos from "../pages/Eventos/index";
import LoginScreen from "../pages/Login";
import { useContext } from "react";
import { useLogin } from "../context/loginProvider";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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
      <Tab.Screen
        name="Grupos"
        component={GruposEmComum}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="group" color={color} size={size} />
          ),
          tabBarLabel: "Grupos",
        }}
      />
      <Tab.Screen
        name="Eventos"
        component={Eventos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="event" color={color} size={size} />
          ),
          tabBarLabel: "Eventos",
        }}
      />
    </Tab.Navigator>
  );
};
const Drawer = createDrawerNavigator();

const LoginNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <TabNavigator /> : <LoginNavigator />;
};

export default MainNavigator;
