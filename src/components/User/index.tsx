import { XStack, YStack, Avatar, Text, H4 } from "tamagui";

export default function User() {
  return (
    <XStack space="$2" ai="center">
      <Avatar size="$5" circular>
        <Avatar.Image src="https://github.com/caiolucio360.png"></Avatar.Image>
        <Avatar.Fallback backgroundColor="$gray5"></Avatar.Fallback>
      </Avatar>
      <YStack>
        <Text color="$gray10">Olá</Text>
        <H4 fontWeight="bold" mt="$-2">
          Caio
        </H4>
      </YStack>
    </XStack>
  );
}
