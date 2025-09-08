// src/data/menus.js - Données des menus du restaurant

export const menus = [
  {
    id: 1,
    name: "Menu Dégustation",
    price: "65€",
    description: "Notre sélection des meilleurs plats",
    dishes: [
      "Empanadas de bœuf (entrée)",
      "Asado de bœuf chimichurri",
      "Tres leches maison",
      "Café colombien & petit four"
    ],
    popular: true
  },
  {
    id: 2,
    name: "Menu Végétarien",
    price: "45€",
    description: "Saveurs végétales d'Amérique du Sud",
    dishes: [
      "Quesadillas aux fleurs de courgette",
      "Salade de quinoa et avocat",
      "Tacos végétariens aux haricots noirs",
      "Flan de coco aux fruits exotiques",
      "Infusion de coca (légale !)"
    ],
    popular: false
  },
  {
    id: 3,
    name: "Menu Carnivore",
    price: "78€",
    description: "Pour les amateurs de viande",
    dishes: [
      "Chorizo grillé & pain de maïs",
      "Soupe de haricots noirs",
      "Picanha grillée au feu de bois",
      "Côte de bœuf sauce chimichurri",
      "Dulce de leche & café"
    ],
    popular: true
  }
];

// Fonction pour filtrer les menus populaires
export const getPopularMenus = () => {
  return menus.filter(menu => menu.popular);
};

// Fonction pour récupérer un menu par son ID
export const getMenuById = (id) => {
  return menus.find(menu => menu.id === id);
};

// Fonction pour récupérer le nombre de menus (utile pour le layout responsive)
export const getMenusCount = () => {
  return menus.length;
};

// Fonction pour ajouter facilement de nouveaux menus
export const addMenu = (newMenu) => {
  const maxId = Math.max(...menus.map(menu => menu.id));
  newMenu.id = maxId + 1;
  menus.push(newMenu);
  return newMenu;
};
