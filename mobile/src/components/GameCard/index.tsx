import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";
import { Text } from "react-native";

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    Ads: string;
  };
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{`${data._count.Ads} anúncio(s)`}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
