// src/data/dishes.js - Données des plats sud-américains

export const dishes = [
  {
    id: 1,
    name: "Asado Argentino",
    description: "Côte de bœuf grillée selon la tradition de la pampa, servie avec chimichurri maison",
    price: "32€",
    category: "Viandes",
    country: "🇦🇷 Argentine",
    image: "/images/plats/asado.jpg", // Vous remplacerez par vos vraies images
    isSpicy: false,
    isPopular: true,
    preparationTime: "45 min",
    ingredients: ["Côte de bœuf", "Chimichurri", "Pommes de terre", "Salade mixte"]
  },
  {
    id: 2,
    name: "Tacos al Pastor",
    description: "Tacos authentiques au porc mariné, ananas grillé et oignon rouge",
    price: "18€",
    category: "Street Food",
    country: "🇲🇽 Mexique",
    image: "/images/plats/tacos-pastor.jpg",
    isSpicy: true,
    isPopular: true,
    preparationTime: "20 min",
    ingredients: ["Porc mariné", "Ananas", "Oignon rouge", "Coriandre", "Tortillas"]
  },
  {
    id: 3,
    name: "Moqueca de Camarão",
    description: "Curry de crevettes brésilien au lait de coco, dendê et poivrons",
    price: "28€",
    category: "Poissons",
    country: "🇧🇷 Brésil",
    image: "/images/plats/moqueca.jpg",
    isSpicy: true,
    isPopular: false,
    preparationTime: "35 min",
    ingredients: ["Crevettes", "Lait de coco", "Poivrons", "Tomates", "Dendê"]
  },
  {
    id: 4,
    name: "Empanadas Salteñas",
    description: "Chaussons farcis à la viande, œuf dur et olives, frits à la perfection",
    price: "16€",
    category: "Entrées",
    country: "🇦🇷 Argentine",
    image: "/images/plats/empanadas.jpg",
    isSpicy: false,
    isPopular: true,
    preparationTime: "25 min",
    ingredients: ["Bœuf haché", "Œuf dur", "Olives", "Pâte maison"]
  },
  {
    id: 5,
    name: "Churrasco Picanha",
    description: "Pièce noble du bœuf brésilien, grillée au feu de bois",
    price: "35€",
    category: "Viandes",
    country: "🇧🇷 Brésil",
    image: "/images/plats/picanha.jpg",
    isSpicy: false,
    isPopular: true,
    preparationTime: "40 min",
    ingredients: ["Picanha", "Gros sel", "Farofa", "Haricots noirs"]
  },
  {
    id: 6,
    name: "Ceviche Peruano",
    description: "Poisson cru mariné au citron vert, oignon rouge et piment",
    price: "24€",
    category: "Poissons",
    country: "🇵🇪 Pérou",
    image: "/images/plats/ceviche.jpg",
    isSpicy: true,
    isPopular: false,
    preparationTime: "15 min",
    ingredients: ["Dorade", "Citron vert", "Piment", "Oignon rouge", "Coriandre"]
  },
  {
    id: 7,
    name: "Quesadillas de Flor",
    description: "Tortillas farcies aux fleurs de courgette et fromage Oaxaca",
    price: "20€",
    category: "Végétarien",
    country: "🇲🇽 Mexique",
    image: "/images/plats/quesadillas.jpg",
    isSpicy: false,
    isPopular: false,
    preparationTime: "18 min",
    ingredients: ["Fleurs de courgette", "Fromage Oaxaca", "Tortillas", "Épinards"]
  },
  {
    id: 8,
    name: "Feijoada Completa",
    description: "Plat national brésilien : haricots noirs, viandes fumées et accompagnements",
    price: "26€",
    category: "Plats Traditionnels",
    country: "🇧🇷 Brésil",
    image: "/images/plats/feijoada.jpg",
    isSpicy: false,
    isPopular: true,
    preparationTime: "60 min",
    ingredients: ["Haricots noirs", "Chorizo", "Porc fumé", "Riz", "Chou frisé"]
  }
];

// Fonction pour filtrer par catégorie
export const getDishesByCategory = (category) => {
  if (category === 'all') return dishes;
  return dishes.filter(dish => dish.category === category);
};

// Fonction pour récupérer les plats populaires
export const getPopularDishes = () => {
  return dishes.filter(dish => dish.isPopular);
};

// Fonction pour récupérer les catégories
export const getCategories = () => {
  const categories = ['all', ...new Set(dishes.map(dish => dish.category))];
  return categories;
};
