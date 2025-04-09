import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "@/constants/Colors";

interface CartItem {
  id: string;
  storeId: string;
  name: string;
  price: number;
  quantity: number;
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const loadCart = async () => {
    try {
      const data = await AsyncStorage.getItem("cart");
      if (data) {
        setCartItems(JSON.parse(data));
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Erro ao carregar o carrinho:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadCart();
    }, [])
  );

  const updateQuantity = async (index: number, newQuantity: number) => {
    try {
      const newCart = [...cartItems];
      if (newQuantity <= 0) {
        newCart.splice(index, 1);
      } else {
        newCart[index].quantity = newQuantity;
      }
      setCartItems(newCart);
      await AsyncStorage.setItem("cart", JSON.stringify(newCart));
    } catch (error) {
      console.error("Erro ao atualizar a quantidade:", error);
    }
  };

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem("cart");
      setCartItems([]);
    } catch (error) {
      console.error("Erro ao limpar o carrinho:", error);
    }
  };

  const cartTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <Stack.Screen options={{ headerShown: false }} />

        <Text style={styles.header}>Carrinho de Compras</Text>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCartText}>Seu carrinho está vazio</Text>
        ) : (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item, index) => item.storeId + item.id + index}
              contentContainerStyle={styles.container}
              renderItem={({ item, index }) => (
                <View style={styles.itemContainer}>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>
                      Preço: R$ {item.price.toFixed(2).replace(".", ",")}
                    </Text>
                    <Text style={styles.itemQuantity}>
                      Quantidade: {item.quantity}
                    </Text>
                  </View>
                  <View style={styles.buttonsRow}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(index, item.quantity - 1)}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(index, item.quantity + 1)}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />

            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>
                Total: R$ {cartTotal.toFixed(2).replace(".", ",")}
              </Text>
            </View>

            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.clearButtonText}>Esvaziar Carrinho</Text>
            </TouchableOpacity>
          </>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  emptyCartText: {
    color: COLORS.grey,
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  itemContainer: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 10,
    marginBottom: 16,
    padding: 10,
  },
  itemInfo: {
    marginBottom: 10,
  },
  itemName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    color: COLORS.grey,
    fontSize: 14,
  },
  itemQuantity: {
    color: COLORS.grey,
    fontSize: 14,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  quantityButton: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 8,
  },
  quantityButtonText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  totalContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  totalText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  clearButton: {
    backgroundColor: "red",
    padding: 15,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  clearButtonText: {
    color: COLORS.white,
    fontSize: 16,
  },
});
