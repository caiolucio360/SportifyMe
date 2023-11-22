import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { TamaguiProvider, Theme } from "tamagui";
import config from "./tamagui.config";
import { useFonts } from "expo-font";
import Routes from "./src/routes";
import Login from "./src/pages/Login";
import LoginProvider from "./src/context/loginProvider";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const isAuthenticated = false;
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (loaded) {
      console.log("Loaded fonts");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <LoginProvider>
      <TamaguiProvider config={config}>
        <Theme name={isDarkTheme ? "light" : "light"}>
          <Routes />
        </Theme>
      </TamaguiProvider>
    </LoginProvider>
  );
}
