import { Switch, SwitchProps, XStack } from "tamagui";
import { Sun, Moon } from "@tamagui/lucide-icons";

export default function ChangeTheme({ ...rest }: SwitchProps) {
  return (
    <XStack space="$2" ai="center">
      <Switch size="$2" bg="$gray6" {...rest}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
      <Sun size="$2" />
      <Moon size="$2" />
    </XStack>
  );
}
