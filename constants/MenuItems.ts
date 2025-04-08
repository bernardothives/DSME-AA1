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
      thumbnail: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Delicioso hambúrguer com carne bovina, queijo, alface, tomate e molho especial.",
      quantity: "200g",
      ingredients: ["Carne bovina", "Queijo", "Alface", "Tomate", "Molho especial"],
      price: 15.9,
    },
    {
      id: "102",
      name: "Hambúrguer Duplo",
      thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      thumbnail: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Molho de tomate, queijo mussarela, manjericão fresco.",
      quantity: "8 fatias",
      ingredients: ["Mussarela", "Molho de tomate", "Manjericão"],
      price: 39.9,
    },
    {
      id: "202",
      name: "Pizza Calabresa",
      thumbnail: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1564128442383-9201fcc740eb?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Molho de tomate, queijo mussarela, calabresa, cebola.",
      quantity: "8 fatias",
      ingredients: ["Calabresa", "Cebola", "Mussarela", "Molho de tomate"],
      price: 44.9,
    },
  ],
  "3": [
    {
      id: "301",
      name: "Uramaki Variado",
      thumbnail: "https://images.unsplash.com/photo-1579551650975-a46e5988d09e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1579551650975-a46e5988d09e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Sushi com arroz temperado, peixe fresco e vegetais.",
      quantity: "150g",
      ingredients: ["Arroz", "Peixe fresco", "Alga nori", "Gengibre"],
      price: 29.9,
    },
    {
      id: "302",
      name: "Nigiri Salmão",
      thumbnail: "https://images.unsplash.com/photo-1637074930269-089fde202b57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1637074930269-089fde202b57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Seleção mista de sashimi fresco.",
      quantity: "200g",
      ingredients: ["Salmão", "Atum", "Peixe branco"],
      price: 34.9,
    },
  ],
  "4": [
    {
      id: "401",
      name: "Chopp Gelado",
      thumbnail: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Chopp artesanal servido bem gelado.",
      quantity: "500ml",
      ingredients: ["Malte", "Lúpulo", "Água"],
      price: 9.9,
    },
    {
      id: "402",
      name: "Petisco Variado",
      thumbnail: "https://images.unsplash.com/photo-1562967914-70f9865b4c2f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1562967914-70f9865b4c2f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Seleção de petiscos para acompanhar o chopp.",
      quantity: "250g",
      ingredients: ["Queijo", "Salame", "Azeitonas"],
      price: 19.9,
    },
  ],
  "5": [
    {
      id: "501",
      name: "Bolo de Cenoura",
      thumbnail: "https://images.unsplash.com/photo-1650937254058-d952a67a4f46?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1650937254058-d952a67a4f46?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Bolo de cenoura com cobertura de chocolate.",
      quantity: "150g",
      ingredients: ["Cenoura", "Farinha", "Ovos", "Chocolate"],
      price: 12.9,
    },
    {
      id: "502",
      name: "Pudim de Leite",
      thumbnail: "https://images.unsplash.com/photo-1702728109878-c61a98d80491?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1702728109878-c61a98d80491?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Pudim de leite condensado tradicional.",
      quantity: "120g",
      ingredients: ["Leite condensado", "Leite", "Ovos"],
      price: 10.9,
    },
  ],
};
