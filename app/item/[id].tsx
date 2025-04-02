import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "@/constants/Colors";
import { menuItems } from "@/constants/MenuItems";

export default function ItemDetails() {
  const { id, storeId } = useLocalSearchParams<{
    id: string;
    storeId: string;
  }>();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    if (!storeId || !id) return;
    const items = menuItems[storeId] || [];
    const found = items.find((i) => i.id === id);
    setItem(found);
  }, [id, storeId]);

  const addToCart = async () => {
    try {
      const storedCart = await AsyncStorage.getItem("cart");
      let cart = storedCart ? JSON.parse(storedCart) : [];

      // Verifica se o item já existe no carrinho
      const existingIndex = cart.findIndex(
        (cartItem: any) =>
          cartItem.storeId === storeId && cartItem.id === item.id
      );

      if (existingIndex >= 0) {
        // Se já existe, apenas incrementa a quantidade
        cart[existingIndex].quantity += 1;
      } else {
        // Se não existe, adiciona novo item
        cart.push({
          ...item,
          storeId,
          quantity: 1,
        });
      }

      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      Alert.alert("Sucesso", "Item adicionado ao carrinho!");
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  };

  if (!item) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
          <Text style={{ color: COLORS.white, textAlign: "center", marginTop: 50 }}>
            Item não encontrado
          </Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <Stack.Screen options={{ headerShown: false }} />

        <ScrollView contentContainerStyle={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>
            R$ {item.price.toFixed(2).replace(".", ",")}
          </Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.quantity}>Quantidade: {item.quantity}</Text>

          <Text style={styles.ingredientsTitle}>Ingredientes:</Text>
          {item.ingredients?.map((ingredient: string, index: number) => (
            <Text key={index} style={styles.ingredient}>
              - {ingredient}
            </Text>
          ))}

          <TouchableOpacity style={styles.button} onPress={addToCart}>
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
  },
  image: {
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
  price: {
    fontSize: 18,
    color: COLORS.grey,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 10,
    textAlign: "center",
  },
  quantity: {
    fontSize: 14,
    color: COLORS.grey,
    marginBottom: 20,
  },
  ingredientsTitle: {
    fontSize: 18,
    color: COLORS.primary,
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 14,
    color: COLORS.white,
  },
  button: {
    marginTop: 30,
    backgroundColor: COLORS.surface,
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.primary,
    fontSize: 16,
    textAlign: "center",
  },
});
