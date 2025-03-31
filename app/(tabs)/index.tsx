import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";

// Exemplo de imagens do local (adicione quantas quiser)
const photos = [
  require("@/assets/images/photo1.png"),
  require("@/assets/images/photo2.png"),
  require("@/assets/images/photo3.png"),
  require("@/assets/images/photo4.png"),
];

export default function Index() {
  // Coordenadas do local
  const latitude = -23.563210;
  const longitude = -46.654250;

  // Função para iniciar a rota de navegação
  const openMaps = () => {
    const url =
      Platform.OS === "ios"
        ? `http://maps.apple.com/?daddr=${latitude},${longitude}&dirflg=d`
        : `http://maps.google.com/maps?daddr=${latitude},${longitude}`;
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir o mapa", err)
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <Stack screenOptions={{ headerShown: false }} />

        {/* Use ScrollView para rolar a tela se necessário */}
        <ScrollView contentContainerStyle={styles.container}>
          {/* Logo */}
          <Image source={require("@/assets/images/logo.png")} style={styles.logo} />

          {/* Título e slogan */}
          <Text style={styles.slogan}>Rode o mundo sem sair do seu prato</Text>

          {/* Descrição geral */}
          <Text style={styles.description}>
            Bem-vindo ao Giro do Sabor! Somos um Food Park onde você pode
            experimentar sabores de diferentes partes do mundo, tudo em um
            só lugar. Venha nos visitar e vivencie uma experiência gastronômica
            inesquecível.
          </Text>

          {/* Carrossel de fotos */}
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.photosContainer}
          >
            {photos.map((photo, index) => (
              <Image key={index} source={photo} style={styles.photo} />
            ))}
          </ScrollView>

          {/* Ícones de contato */}
          <View style={styles.contactContainer}>
            {/* Telefone */}
            <TouchableOpacity
              onPress={() => Linking.openURL("tel:+55000000000")}
              style={styles.iconButton}
            >
              <Ionicons name="call-outline" size={24} color={COLORS.primary} />
            </TouchableOpacity>

            {/* WhatsApp */}
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("whatsapp://send?phone=+55000000000")
              }
              style={styles.iconButton}
            >
              <Ionicons name="logo-whatsapp" size={24} color={COLORS.primary} />
            </TouchableOpacity>

            {/* Instagram */}
            <TouchableOpacity
              onPress={() => Linking.openURL("https://instagram.com/seuPerfil")}
              style={styles.iconButton}
            >
              <Ionicons name="logo-instagram" size={24} color={COLORS.primary} />
            </TouchableOpacity>

            {/* E-mail */}
            <TouchableOpacity
              onPress={() => Linking.openURL("mailto:contato@girodosabor.com")}
              style={styles.iconButton}
            >
              <Ionicons name="mail-outline" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          {/* Mapa com botão de navegação sobreposto */}
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{ latitude, longitude }}
                title="Giro do Sabor"
                description="Nosso endereço"
              />
            </MapView>
            {/* Botão de navegação sobreposto */}
            <TouchableOpacity style={styles.navigateButton} onPress={openMaps}>
              <Ionicons name="navigate-outline" size={25} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 40,
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginTop: -20,
    marginBottom: -60,
  },
  slogan: {
    color: COLORS.grey,
    fontSize: 16,
    marginBottom: 20,
  },
  description: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  photosContainer: {
    marginBottom: 20,
  },
  photo: {
    width: width - 60,
    height: 200,
    borderRadius: 8,
    marginHorizontal: 10,
    resizeMode: "cover",
  },
  mapContainer: {
    width: width - 40,
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 40,
  },
  map: {
    flex: 1,
  },
  // Botão de navegação posicionado no canto inferior direito do mapa
  navigateButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: COLORS.surface,
    padding: 10,
    borderRadius: 20,
    elevation: 3, // sombra para Android
    shadowColor: COLORS.surface, // sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginBottom: 20,
  },
  iconButton: {
    padding: 10,
  },
});
