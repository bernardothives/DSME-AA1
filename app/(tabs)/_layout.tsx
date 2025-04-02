import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/Colors';
import { View, TouchableOpacity } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  // Filter out routes that should be hidden
  const visibleRoutes = state.routes.filter((route) =>
    !['item/[id]', 'menu/[id]', 'store/[id]'].includes(route.name)
  );

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'black',
        borderTopWidth: 0,
        elevation: 0,
        height: 55,
        paddingBottom: 8,
      }}
    >
      {visibleRoutes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          // Only navigate if the tab press wasn't prevented
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused, // Added 'focused' property
                size: 24,
                color: isFocused ? COLORS.primary : COLORS.grey,
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="megaphone-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stores"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="fast-food-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shopingcart"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Hidden routes */}
      <Tabs.Screen
        name="item/[id]"
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen
        name="menu/[id]"
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen
        name="store/[id]"
        options={{ tabBarButton: () => null }}
      />
    </Tabs>
  );
}
