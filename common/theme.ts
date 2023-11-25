import { useColorScheme } from 'react-native';
import { TinyColor } from '@ctrl/tinycolor';
import { presetDarkPalettes, presetPalettes } from '@ant-design/colors';
const { geekblue: lightColors } = presetPalettes;
const { geekblue: darkColors } = presetDarkPalettes;

function textColors(baseColor: string) {
  const color = new TinyColor(baseColor);
  return {
    PrimaryText: color.setAlpha(0.9).toString(),
    SecondaryText: color.setAlpha(0.5).toString(),
    DisableText: color.setAlpha(0.3).toString(),
    Border: color.setAlpha(0.2).toString(),
    Divider: color.setAlpha(0.12).toString(),
  };
}

export const light = {
  Primary: lightColors[5],
  Secondary: lightColors[4],

  Shadow: '#00000010',
  Background: 'white',
  ContentBackground: 'white',
  CardBackground: lightColors[0],
  ModalBackground: 'white',
  LightCardBackground: '#f0f0f0',
  MaskBackground: 'rgba(0,0,0,0.5)',

  ImageOpacity: 1,

  ...textColors('#000000'),

  SuccessText: '#7ebc59',
  DangerText: '#de4307',
};

const DarkPrimary = lightColors[4];
const DarkBackground = new TinyColor('#121212').mix(darkColors[0]);

export const dark: typeof light = {
  ...light,
  Primary: DarkPrimary,
  Secondary: lightColors[3],

  Background: DarkBackground.toString(),
  ContentBackground: DarkBackground.tint(5).toString(),
  CardBackground: DarkBackground.tint(11).toString(),
  ModalBackground: DarkBackground.tint(14).toString(),
  LightCardBackground: DarkBackground.tint(16).toString(),
  MaskBackground: DarkBackground.setAlpha(0.6).toString(),

  ImageOpacity: 0.9,

  // text and line
  ...textColors('#ffffff'),
};

export function useTheme() {
  const colorSchema = useColorScheme();
  const isDark = colorSchema === 'dark';
  return isDark ? dark : light;
}

export type PodiumTheme = typeof light;
