import React, { useState } from "react";
import { YStack, XStack, Input, Card, H4, Text } from "tamagui";

export default function MyGroup({ navigation,route }) {
  const eventos = [
    {
      id: 1,
      title: "Futebol na quadra do marquin",
      date: "12/05/2024",
      confimed: 15,
      groupId: 1,
    },
    {
      id: 2,
      title: "Futebol no beira rio",
      date: "21/05/2024",
      confimed: 20,
      groupId: 1,
    },
    {
      id: 3,
      title: "Futebol na quadra do marquin",
      date: "05/06/2024",
      confimed: 11,
      groupId: 1,
    },
    {
      id: 4,
      title: "Futebol no beira rio",
      date: "11/06/2024",
      confimed: 5,
      groupId: 1,
    },
    {
      id: 5,
      title: "Caminhada pampulha",
      date: "11/06/2024",
      confimed: 3,
      groupId: 2,
    },
    {
      id: 6,
      title: "Caminhada pampulha",
      date: "12/06/2024",
      confimed: 10,
      groupId: 2,
    },
    {
      id: 7,
      title: "Caminhada pampulha",
      date: "13/06/2024",
      confimed: 7,
      groupId: 2,
    },
  ];

  const [termoBusca, setTermoBusca] = useState("");

  const eventosFiltrados = eventos.filter((evento) =>
    evento.title.toLowerCase().includes(termoBusca.toLowerCase()) && evento.groupId == route.params.groupId
  );

  return (
    <YStack bg="$background" f={1} p="$6" pt="$8">
      <XStack space="$2" mt="$6">
        <Input
          flex={1}
          w="$5"
          h="$5"
          placeholder="Buscar por nome..."
          focusStyle={{
            bw: 2,
            boc: "$red10",
          }}
          onChangeText={(text) => setTermoBusca(text)}
        />
      </XStack>
      <YStack space="$2" mt="$6">
        {eventosFiltrados.map((group) => (
          <Card
            animation="bouncy"
            pressStyle={{ scale: 0.875 }}
            key={group.id}
            backgroundColor="$gray7"
          >
            <Card.Header padded>
              <XStack space="$2" ai="center">
                <YStack>
                  <H4 fontWeight="bold" mt="$-2">
                    {group.title}
                  </H4>
                  <XStack space="$2" ai="center">
                    <Text>{group.date}</Text>
                    <Text>Confirmados: {group.confimed}</Text>
                  </XStack>
                </YStack>
              </XStack>
            </Card.Header>
          </Card>
        ))}
      </YStack>
    </YStack>
  );
}
