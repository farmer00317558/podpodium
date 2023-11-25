import { TinyColor } from '@ctrl/tinycolor';
import React, { PropsWithChildren, ReactNode, useState } from 'react';
import { LayoutChangeEvent, Pressable, StyleSheet, Text, TextStyle, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '../../common/theme';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  expand: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: -1,
  },
  expandText: {
    fontSize: 12,
    textAlign: 'center',
  },
  line: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontFamily: 'LXGWWenKaiMonoLite-Bold',
  },
  order: {
    marginRight: 5,
    fontFamily: 'LXGWWenKaiMonoLite-Bold',
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 5,
    marginRight: 5,
  },
});

interface InsertObject {
  playTimeAnchor: {
    value: number;
    text: string;
  };
}

interface Operation {
  insert: InsertObject | string;
  attributes: {
    bold?: boolean;
    italic?: boolean;
    list?: 'ordered' | 'bullet';
  };
}

interface Delta {
  ops: Operation[];
}

function Line(props: PropsWithChildren<{}>) {
  return <View style={styles.line}>{props.children}</View>;
}

interface IProps {
  content: Delta;
  onSeek: (value: number) => void;
  maxHeight?: number;
}

export default function RichText(props: IProps) {
  const { content, onSeek, maxHeight } = props;
  const theme = useTheme();
  const { t } = useTranslation();
  const [height, setHeight] = useState(0);
  const [wrapperMaxHeight, setWrapperMaxHeight] = useState(maxHeight);
  const { ops } = content;
  const items: ReactNode[] = [];

  let line: ReactNode[] = [];
  let order = 0;
  let orderFlag = false;

  ops.forEach((op, opIdx) => {
    const { attributes = {}, insert } = op;
    const { bold = false, list } = attributes;

    // support insert operation only
    if (!insert) {
      return;
    }

    if (list) {
      const isOrderLine = list === 'ordered';
      items.push(
        <Line key={opIdx}>
          {isOrderLine ? (
            <Text style={[styles.order, { color: theme.PrimaryText }]}>{++order}.</Text>
          ) : (
            <View style={[styles.dot, { backgroundColor: theme.PrimaryText }]} />
          )}
          {line}
        </Line>,
      );
      line = [];
      if (isOrderLine) {
        orderFlag = false;
      }
      return;
    }

    // insert text
    if (typeof insert === 'string') {
      const segments = insert.split('\n');

      segments.forEach((segment, idx) => {
        const style: TextStyle = {
          fontSize: 14,
          lineHeight: 15 * 1.5,
          color: theme.PrimaryText,
          fontFamily: bold ? 'LXGWWenKaiLite-Bold' : 'LXGWWenKaiLite-Regular',
        };
        const text = (
          <Text key={`${opIdx}-${idx}`} style={style}>
            {segment}
          </Text>
        );
        line.push(text);

        // don't break for last segment
        if (idx !== segments.length - 1) {
          items.push(<Line>{line}</Line>);
          if (orderFlag) {
            order = 0;
          }
          orderFlag = true;
          line = [];
        }
      });

      return;
    }

    // insert time anchor
    if (insert.playTimeAnchor) {
      const { text, value } = insert.playTimeAnchor;
      const time = (
        <TouchableOpacity key={opIdx} style={{}} onPress={() => onSeek(value)}>
          <Text style={[styles.time, { color: theme.Primary }]}>{text}</Text>
        </TouchableOpacity>
      );
      line.push(time);
      return;
    }
  });

  if (line.length > 0) {
    items.push(<Line>{line}</Line>);
  }

  const handleLayout = (e: LayoutChangeEvent) => {
    const { layout } = e.nativeEvent;
    setHeight(layout.height);
  };

  const isExceedHeight = maxHeight && height > maxHeight;
  const isShowAll = !wrapperMaxHeight;

  return (
    <View style={{ maxHeight: wrapperMaxHeight }}>
      <View onLayout={handleLayout}>
        {items.map((i, idx) => (
          <View key={idx}>{i}</View>
        ))}
      </View>
      {isExceedHeight && (
        <Pressable
          style={[
            styles.expand,
            !isShowAll && {
              backgroundColor: new TinyColor(theme.CardBackground).setAlpha(0.9).toString(),
            },
          ]}
          onPress={() => {
            setWrapperMaxHeight((i) => (i ? undefined : maxHeight));
          }}
        >
          <Text style={[styles.expandText, { color: theme.Primary }]}>
            {isShowAll ? t('richText.close') : t('richText.showAll')}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
