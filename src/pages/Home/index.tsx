import { YStack, XStack, Input } from "tamagui";
import User from "../../components/User";
import { Button } from "../../components/Button";
import ChangeTheme from "../../components/ChangeTheme";

export default function Home({ theme }) {
  return (
    <YStack bg="$background" f={1} p="$6" pt="$8">
      <XStack jc="space-between">
        <User />
        <ChangeTheme onCheckedChange={theme} />
      </XStack>
      <XStack space="$2" mt="$6">
        <Input
          flex={1}
          w="$5"
          h="$5"
          placeholder="Buscar..."
          focusStyle={{
            bw: 2,
            boc: "$red10",
          }}
        />
        <Button background="outline" />
      </XStack>
    </YStack>
  );
}
