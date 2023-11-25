import React, { useEffect, useMemo } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import Discover from './Discover';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScreenDiscover, ScreenFeed, ScreenNote, ScreenPlayer, ScreenUser } from '../common/constant';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RouteParamsList } from '../common/type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Note from './Note';
import i18n from '../i18n';

const BottomTab = createBottomTabNavigator();

const tabConfig = {
  [ScreenDiscover]: {
    label: i18n.t('home.discover'),
    iconComp: Icon,
    icon: {
      normal: 'radio-outline',
    },
  },
  [ScreenFeed]: {
    label: i18n.t('home.subscribe'),
    iconComp: Icon,
    icon: {
      normal: 'library-outline',
    },
  },
  [ScreenNote]: {
    label: i18n.t('home.notes'),
    iconComp: MCIcon,
    icon: {
      normal: 'file-document-edit-outline',
    },
  },
  [ScreenUser]: {
    label: i18n.t('home.profile'),
    iconComp: Icon,
    icon: {
      normal: 'person-outline',
    },
  },
};

type BottomTabKey = keyof typeof tabConfig;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 0,
  },
  tabBar: {
    borderTopWidth: 0,
  },
  tabItem: {
    marginBottom: 5,
    marginTop: 5,
  },
});

export default function Home() {
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  useEffect(() => {
    const handleURL = (url: string) => {
      if (url === 'trackplayer://notification.click') {
        nav.navigate(ScreenPlayer);
      }
    };
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleURL(url);
      }
    });
    const sub = Linking.addEventListener('url', ({ url }) => {
      handleURL(url);
    });
    return () => sub.remove();
  }, [nav]);

  const inset = useSafeAreaInsets();
  const paddingTop = useMemo(() => Math.max(inset.top, 16), [inset.top]);

  return (
    <View style={[styles.container, { paddingTop }]}>
      <BottomTab.Navigator
        backBehavior="none"
        initialRouteName={ScreenFeed}
        // tabBar={() => null}
        screenOptions={({ route }) => {
          const name = route.name as BottomTabKey;
          const config = tabConfig[name];
          return {
            tabBarIcon: ({ color, size }) => {
              const IconComp = config.iconComp;
              return <IconComp name={config.icon.normal} size={size} color={color} />;
            },
            // header: ({ options }) => {
            //   if (name !== 'discover') {
            //     return;
            //   }
            //   return (
            //     <View style={[styles.headerWrapper, options.headerStyle, { marginTop: inset.top }]}>
            //       <Text style={styles.headerTitle}>发现</Text>
            //       <View>
            //         <LinkButton
            //           text="搜索"
            //           icon="layers-search-outline"
            //           onPress={() => {
            //             nav.navigate(ScreenSearch);
            //           }}
            //         />
            //       </View>
            //     </View>
            //   );
            // },
            headerTransparent: true,
            headerShown: false,
            tabBarLabel: config.label,
            tabBarItemStyle: styles.tabItem,
            tabBarStyle: styles.tabBar,
          };
        }}
      >
        <BottomTab.Screen name={ScreenDiscover} component={Discover} />
        <BottomTab.Screen name={ScreenFeed} component={Feed} />
        <BottomTab.Screen name={ScreenNote} component={Note} />
        <BottomTab.Screen name={ScreenUser} component={Profile} />
      </BottomTab.Navigator>
    </View>
  );
}
