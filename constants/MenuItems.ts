// constants/MenuItems.ts

export interface MenuItemType {
    id: string;
    name: string;
    thumbnail: string;
    image: string;
    description: string;
    quantity: string;
    ingredients: string[];
    price: number;
  }
  
  export const menuItems: Record<string, MenuItemType[]> = {
    "1": [
      {
        id: "101",
        name: "Hambúrguer Clássico",
        thumbnail: "https://example.com/hamburguer1-thumb.jpg",
        image: "https://example.com/hamburguer1.jpg",
        description:
          "Delicioso hambúrguer com carne bovina, queijo, alface, tomate e molho especial.",
        quantity: "200g",
        ingredients: ["Carne bovina", "Queijo", "Alface", "Tomate", "Molho especial"],
        price: 15.9,
      },
      {
        id: "102",
        name: "Hambúrguer Duplo",
        thumbnail: "https://example.com/hamburguer2-thumb.jpg",
        image: "https://example.com/hamburguer2.jpg",
        description: "Duas carnes, queijo duplo, cebola e molho da casa.",
        quantity: "300g",
        ingredients: ["Carne bovina", "Queijo", "Cebola", "Molho da casa"],
        price: 19.9,
      },
    ],
    "2": [
      {
        id: "201",
        name: "Pizza Margherita",
        thumbnail: "https://example.com/pizza-margherita-thumb.jpg",
        image: "https://example.com/pizza-margherita.jpg",
        description: "Molho de tomate, queijo mussarela, manjericão fresco.",
        quantity: "8 fatias",
        ingredients: ["Mussarela", "Molho de tomate", "Manjericão"],
        price: 39.9,
      },
      {
        id: "202",
        name: "Pizza Calabresa",
        thumbnail: "https://example.com/pizza-calabresa-thumb.jpg",
        image: "https://example.com/pizza-calabresa.jpg",
        description: "Molho de tomate, queijo mussarela, calabresa, cebola.",
        quantity: "8 fatias",
        ingredients: ["Calabresa", "Cebola", "Mussarela", "Molho de tomate"],
        price: 44.9,
      },
    ],
    // ... e assim por diante para outras lojas
  };
  