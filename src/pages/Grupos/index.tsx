import React, { useMemo, useState } from "react";
import { Button as Btn } from "../../components/Button";
import {
  XStack,
  YStack,
  Input,
  Adapt,
  Label,
  Select,
  SelectProps,
  Sheet,
  getFontSize,
} from "tamagui";
import { ChevronDown, ChevronUp, Check } from "@tamagui/lucide-icons";

export default function GruposEmComum({ theme }) {
  return (
    <YStack bg="$background" f={1} p="$6" pt="$8">
      <Label>Selecione um esporte</Label>
      <SelectDemoItem native />
      <XStack space="$2" mt="$6">
        <Input
          flex={1}
          w="$5"
          h="$5"
          placeholder="Buscar grupos por nome ou id..."
          focusStyle={{
            bw: 2,
            boc: "$red10",
          }}
        />
        <Btn background="outline" />
      </XStack>
    </YStack>
  );
}

const items = [
  { name: "Futebol" },
  { name: "Volei" },
  { name: "Tenis" },
  { name: "Corrida" },
  { name: "Caminhada" },
  { name: "Natacao" },
];

export function SelectDemoItem(props: SelectProps) {
  const [val, setVal] = useState("apple");

  return (
    <Select
      id="esportes"
      value={val}
      onValueChange={setVal}
      disablePreventBodyScroll
      {...props}
    >
      <Select.Trigger width={220} iconAfter={ChevronDown}>
        <Select.Value placeholder="Something" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
        </Select.ScrollUpButton>

        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <Select.Group>
            <Select.Label>Esportes</Select.Label>
            {/* for longer lists memoizing these is useful */}
            {useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item
                      debug="verbose"
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  );
                }),
              [items]
            )}
          </Select.Group>
          {/* Native gets an extra icon */}
          {props.native && (
            <YStack
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              alignItems="center"
              justifyContent="center"
              width={"$4"}
              pointerEvents="none"
            >
              <ChevronDown size={getFontSize((props.size ?? "$true") as any)} />
            </YStack>
          )}
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}
