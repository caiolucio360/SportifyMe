import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./tab.routes";
import UnAuthenticated from "./unAuthenticated.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
