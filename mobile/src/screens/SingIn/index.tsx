import { Image, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { GameController } from "phosphor-react-native";
import * as AuthSession from "expo-auth-session";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { THEME } from "../../theme";

import { styles } from "./styles";

export function SignIn() {
  async function handleDiscordSingIn() {
    const response = await AuthSession.startAsync({
      authUrl:
        "https://discord.com/api/oauth2/authorize?client_id=1022955517187989625&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40n1ls0n%2Fmobile&response_type=token&scope=identify",
    });

    fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `Bearer ${response.params.access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log(response);
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}></SafeAreaView>

      <Image source={logoImg} style={styles.logo} />

      <Heading title="Entrar" subtitle="Encontre o seu duo e bora jogar." />

      <TouchableOpacity style={styles.button} onPress={handleDiscordSingIn}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text>Entrar com Discord</Text>
      </TouchableOpacity>
    </Background>
  );
}
