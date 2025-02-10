import { Text, type TextProps, StyleSheet } from "react-native";

type Props = TextProps & {
  variant?: keyof typeof styles;
  color?: string;
};

export function ThemeText({ variant, color, ...rest }: Props) {
  return <Text style={styles[variant ?? "body3"]} {...rest} />;
}

const styles = StyleSheet.create({
  body3: {
    fontSize: 10,
    lineHeight: 16,
  },
  headline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
});
