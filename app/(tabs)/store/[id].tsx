import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";
import { stores } from "@/constants/Stores";

export default function StoreDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const store = stores.find((s) => s.id === id);

  if (!store) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Loja não encontrada</Text>
      </View>
    );
  }

  const openLink = (url: string) => Linking.openURL(url).catch(err => console.error("Erro ao abrir link", err));

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <Stack.Screen options={{ headerShown: false }} />
        <ScrollView contentContainerStyle={styles.container}>
          <Image source={{ uri: store.banner }} style={styles.banner} />
          <Text style={styles.name}>{store.name}</Text>
          <Text style={styles.description}>{store.description}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photosContainer}>
            {store.photos?.map((photo, index) => (
              <Image key={index} source={{ uri: photo }} style={styles.photo} />
            ))}
          </ScrollView>
          <View style={styles.contactContainer}>
            {store.phone && (
              <TouchableOpacity onPress={() => openLink(`tel:${store.phone}`)} style={styles.iconButton}>
                <Ionicons name="call-outline" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            )}
            {store.whatsapp && (
              <TouchableOpacity onPress={() => openLink(`whatsapp://send?phone=${store.whatsapp}`)} style={styles.iconButton}>
                <Ionicons name="logo-whatsapp" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            )}
            {store.instagram && (
              <TouchableOpacity onPress={() => openLink(store.instagram)} style={styles.iconButton}>
                <Ionicons name="logo-instagram" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            )}
            {store.email && (
              <TouchableOpacity onPress={() => openLink(`mailto:${store.email}`)} style={styles.iconButton}>
                <Ionicons name="mail-outline" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.button} onPress={() => openLink(store.deliveryApp)}>
            <Ionicons name="bicycle-outline" size={20} color={COLORS.primary} />
            <Text style={styles.buttonText}>Pedir pelo Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push({ pathname: "/menu/[id]", params: { id: store.id } })}
          >
            <Ionicons name="restaurant-outline" size={20} color={COLORS.primary} />
            <Text style={styles.buttonText}>Ver Cardápio</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 20,
  },
  photosContainer: {
    marginBottom: 20,
  },
  photo: {
    width: width * 0.7,
    height: 150,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 30,
  },
  iconButton: {
    padding: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: COLORS.primary,
    fontSize: 16,
    marginLeft: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  errorText: {
    color: COLORS.grey,
    fontSize: 16,
  },
});