import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./tab.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
