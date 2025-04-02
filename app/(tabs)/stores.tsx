import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "@/constants/Colors";
import { stores } from "@/constants/Stores";

export default function Stores() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <Stack screenOptions={{ headerShown: false }} />
        <Text style={styles.header}>Restaurantes</Text>
        <FlatList
          contentContainerStyle={styles.container}
          data={stores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push({pathname: "/store/[id]", params: { id: item.id }})}
            >
              <Image source={{ uri: item.banner }} style={styles.banner} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 50,
  },
  header: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  banner: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: COLORS.grey,
    fontSize: 14,
    marginTop: 5,
  },
});