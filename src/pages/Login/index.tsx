import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Image, Input, Text } from "tamagui";
import { useLogin } from "../../context/loginProvider";

const LoginScreen = () => {
  const { setIsLoggedIn } = useLogin();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleForgotPassword = () => {
    console.log("Handle Forgot Password");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../public/assets/Logo.png")} />
      <Text style={styles.title}>SportifyMe</Text>
      <Text style={styles.subTitle}>Unindo apaixonados</Text>
      <Text style={styles.subTitle} marginBottom={20}>
        por esportes
      </Text>
      <Input
        style={styles.input}
        size="$6"
        borderWidth={2}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        style={styles.input}
        size="$6"
        borderWidth={2}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        alignSelf="center"
        size="$6"
        onPress={() => handleLogin()}
        style={styles.button}
      >
        Login
      </Button>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={handleForgotPassword}
      >
        <Text style={styles.forgotButtonText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#0FCA43",
    fontSize: 24,
    marginBottom: 20,
  },
  subTitle: {
    color: "#000000",
    fontSize: 24,
    alignItems: "center",
  },
  input: {
    borderColor: "green",
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0FCA43",
    color: "#ffff",
    padding: 10,
    width: "80%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  forgotButton: {
    marginTop: 20,
  },
  forgotButtonText: {
    color: "black",
  },
});

export default LoginScreen;
