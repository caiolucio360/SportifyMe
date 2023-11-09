import React, { useEffect, useState } from "react";
import { TamaguiProvider, Theme } from "tamagui";
import config from "./tamagui.config";
import Home from "./src/pages/Home";
import { useFonts } from "expo-font";
import Routes from "./src/routes";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

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
    <TamaguiProvider config={config}>
      <Theme name={isDarkTheme ? "dark" : "ligth"}>
        <Routes />
        {/* <Home theme={setIsDarkTheme} /> */}
      </Theme>
    </TamaguiProvider>
  );
}
