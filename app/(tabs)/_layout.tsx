import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.grey,
            tabBarStyle: {
                backgroundColor: "black",
                borderTopWidth: 0,
                position: "absolute",
                elevation: 0,
                height: 55,
                paddingBottom: 8,
            },
        }}
    >
        <Tabs.Screen name="index" 
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="home-outline" size={size} color={color}/>
            }}
        />
        <Tabs.Screen name="events" 
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="megaphone-outline" size={size} color={color}/>
            }}
        />
        <Tabs.Screen name="stores" 
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="fast-food-outline" size={size} color={color}/>
            }}
        />
        <Tabs.Screen name="shopingcart" 
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="cart-outline" size={size} color={color}/>
            }}
        />
    </Tabs>
  );
}