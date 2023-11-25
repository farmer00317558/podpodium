import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import SpinIcon from '../component/SpinIcon';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 14,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
    marginLeft: 4,
  },
  icon: {
    width: 30,
    height: 30,
    alignItems: 'flex-start',
  },
});

interface IProps extends TouchableOpacityProps {
  color?: string;
  text: string;
  icon?: string;
  iconSize?: number;
  activeText?: string;
  activeIcon?: string;
  active?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  spin?: boolean;
}

export default function StateButton(props: IProps) {
  const theme = useTheme();
  const {
    color,
    text,
    icon,
    spin = false,
    iconOnly = false,
    iconSize,
    active,
    loading = false,
    activeIcon,
    activeText,
    ...otherProps
  } = props;
  const i = (active ? activeIcon : icon) || icon;
  const t = (active ? activeText : text) || text;
  const iconColor = active ? theme.Primary : color ?? theme.PrimaryText;
  const wrapperStyle = [
    styles.wrapper,
    {
      borderColor: !active ? theme.Border : theme.Primary,
    },
  ];
  const textStyle = [
    styles.text,
    {
      color: !active ? color ?? theme.PrimaryText : theme.Primary,
    },
  ];
  const IconComp = SpinIcon;

  if (iconOnly) {
    if (loading) {
      return <ActivityIndicator color={theme.Primary} size={iconSize ?? 30} />;
    } else {
      return (
        <TouchableOpacity {...otherProps}>
          {i && (
            <IconComp color={iconColor} style={styles.icon} enable={spin} name={i} size={iconSize ?? 30} />
          )}
        </TouchableOpacity>
      );
    }
  }
  return (
    <TouchableOpacity style={wrapperStyle} disabled={loading} {...otherProps}>
      {loading && <ActivityIndicator color={theme.Primary} size={iconSize ?? 16} />}
      {!loading && i && <IconComp enable={false} color={iconColor} name={i} size={iconSize ?? 16} />}
      <Text style={textStyle}>{t}</Text>
    </TouchableOpacity>
  );
}
