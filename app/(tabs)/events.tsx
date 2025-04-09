import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { ResizeMode, Video } from "expo-av";
import { COLORS } from "@/constants/Colors";
import { events } from "@/constants/Events";

export default function ProgramacaoSemanal() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <Stack screenOptions={{ headerShown: false }} />
        <Text style={styles.header}>Programação Semanal</Text>
        <ScrollView contentContainerStyle={styles.container}>
          {events.days.map((day) => (
            <View key={day.day} style={styles.daySection}>
              <Text style={styles.dayTitle}>{day.day}</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.eventScroll}
              >
                {day.events.map((event) => (
                  <View key={event.id} style={styles.eventCard}>
                    <Video
                      source={{ uri: event.video }}
                      style={styles.video}
                      useNativeControls
                      resizeMode={ResizeMode.COVER}
                    />
                    <Text style={styles.eventArtist}>{event.artist}</Text>
                    <Text style={styles.eventTime}>{event.time}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  header: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  daySection: {
    marginBottom: 30,
  },
  dayTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  eventScroll: {
  },
  eventCard: {
    marginRight: 15,
    width: width * 0.7,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 8,
    padding: 10,
  },
  video: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  eventArtist: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  eventTime: {
    color: COLORS.grey,
    fontSize: 14,
  },
});