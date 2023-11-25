import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mask: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    height: 200,
  },
  panel: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
});

interface IProps {
  title: string;
  minHeight?: number | 'auto';
  onClose?: () => void;
}

const PanelScreen = (props: PropsWithChildren<IProps>) => {
  const { minHeight = 260, title, children, onClose } = props;
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/* // https://github.com/software-mansion/react-native-gesture-handler/issues/1163#issuecomment-773626608 */}
      <Pressable style={[styles.mask, { backgroundColor: theme.MaskBackground }]} onPress={onClose} />
      <View style={[styles.panel, { minHeight, backgroundColor: theme.ModalBackground }]}>
        <View>
          <Text style={[styles.title, { color: theme.PrimaryText }]}>{title}</Text>
        </View>
        {children}
      </View>
    </View>
  );
};

export default PanelScreen;
