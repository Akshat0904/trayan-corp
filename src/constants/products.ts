export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

// Create products based on the product list
export const products: Product[] = [
  // STRONG ACIDS
  {
    id: 1,
    name: "SULPHURIC ACID",
    category: "STRONG ACIDS",
    description:
      "High-purity industrial sulphuric acid with consistent quality for various manufacturing processes.",
    image: "",
  },
  {
    id: 2,
    name: "OLEUM",
    category: "STRONG ACIDS",
    description:
      "Concentrated form of sulfuric acid containing dissolved sulfur trioxide, ideal for specialized chemical processes.",
    image: "",
  },
  {
    id: 3,
    name: "NITRIC ACID",
    category: "STRONG ACIDS",
    description:
      "High-grade nitric acid available in various concentrations for industrial applications.",
    image: "",
  },
  {
    id: 4,
    name: "GLACIAL ACETIC ACID",
    category: "STRONG ACIDS",
    description:
      "Pure acetic acid with minimal water content, ideal for industrial and laboratory applications.",
    image: "",
  },
  {
    id: 5,
    name: "PHOSPHORIC ACID",
    category: "STRONG ACIDS",
    description:
      "Technical and food-grade phosphoric acid for diverse industrial applications.",
    image: "",
  },
  {
    id: 6,
    name: "HYDROCHLORIC ACID",
    category: "STRONG ACIDS",
    description:
      "High-quality hydrochloric acid available in various concentrations for different industrial uses.",
    image: "",
  },

  // BASIC CHEMICAL
  {
    id: 7,
    name: "SODA ASH (LIGHT/DENSE)",
    category: "BASIC CHEMICAL",
    description:
      "Sodium carbonate available in light and dense forms for various industrial applications.",
    image: "/images/additives.jpg",
  },
  {
    id: 8,
    name: "CAUSTIC SODA (FLAKES/PEARLS/LYE)",
    category: "BASIC CHEMICAL",
    description:
      "Sodium hydroxide available in multiple forms - flakes, pearls, and liquid lye.",
    image: "/images/additives.jpg",
  },
  {
    id: 9,
    name: "SODIUM SILICATE (GLASS AND LIQUID)",
    category: "BASIC CHEMICAL",
    description:
      "Versatile sodium silicate available in both solid and liquid forms.",
    image: "",
  },
  {
    id: 10,
    name: "SODIUM META SILICATE SODIUM",
    category: "BASIC CHEMICAL",
    description:
      "Specialized silicate compound for detergent and cleaning applications.",
    image: "",
  },
  {
    id: 11,
    name: "SODIUM ALUMINA SILICATE",
    category: "BASIC CHEMICAL",
    description: "Synthetic silicate with numerous industrial applications.",
    image: "",
  },
  {
    id: 12,
    name: "PRECIPITATE SILICA SODIUM LAURYL SULPHATE",
    category: "BASIC CHEMICAL",
    description:
      "High-performance surfactant compound for specialized applications.",
    image: "",
  },
  {
    id: 13,
    name: "LINER ALKYL BENZENE SULFONIC ACID",
    category: "BASIC CHEMICAL",
    description:
      "Key surfactant for detergent and cleaning product formulations.",
    image: "",
  },
  {
    id: 14,
    name: "SULPHAMIC ACID",
    category: "BASIC CHEMICAL",
    description:
      "Versatile acid compound for descaling and cleaning applications.",
    image: "",
  },

  // INORGANIC CHEMICAL - Complete list from inorganic.md
  {
    id: 15,
    name: "SODIUM SULPHATE",
    category: "INORGANIC CHEMICAL",
    description: "Versatile sodium salt for numerous industrial applications.",
    image: "/images/raw-materials.jpg",
  },
  {
    id: 16,
    name: "MAGNESIUM SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "High-purity magnesium salt used in agriculture and industrial processes.",
    image: "/images/raw-materials.jpg",
  },
  {
    id: 17,
    name: "MANGANESE SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Essential micronutrient compound for agricultural and industrial use.",
    image: "",
  },
  {
    id: 18,
    name: "AMMONIUM SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Nitrogen fertilizer and laboratory reagent with wide industrial applications.",
    image: "",
  },
  {
    id: 19,
    name: "FERROUS SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Iron supplement and water treatment chemical with versatile applications.",
    image: "",
  },
  {
    id: 20,
    name: "ZINC SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Essential micronutrient for agriculture and ingredient in various industrial processes.",
    image: "",
  },
  {
    id: 21,
    name: "COPPER SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Versatile copper compound used in agriculture, pool treatments, and manufacturing.",
    image: "",
  },
  {
    id: 22,
    name: "NICKEL SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Key compound for electroplating and battery manufacturing applications.",
    image: "",
  },
  {
    id: 23,
    name: "COBALT SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Essential compound for lithium-ion battery production and ceramic pigments.",
    image: "",
  },
  {
    id: 24,
    name: "POTASSIUM SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Premium potassium fertilizer and ingredient in various industrial processes.",
    image: "",
  },
  {
    id: 25,
    name: "CALCIUM CHLORIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Versatile calcium salt for diverse applications including deicing and food processing.",
    image: "",
  },
  {
    id: 26,
    name: "MAGNESIUM CHLORIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Essential mineral compound used in deicing, dust control, and magnesium supplements.",
    image: "",
  },
  {
    id: 27,
    name: "POTASSIUM CHLORIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Widely used potassium source for fertilizers, food processing, and pharmaceuticals.",
    image: "",
  },
  {
    id: 28,
    name: "SODIUM CHLORIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Common salt with countless industrial applications beyond food processing.",
    image: "",
  },
  {
    id: 29,
    name: "ZINC CHLORIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Versatile zinc compound used in batteries, textile processing, and chemical synthesis.",
    image: "",
  },
  {
    id: 30,
    name: "AMMONIUM CHLORIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Nitrogen-containing salt used in fertilizers, batteries, and metal treatment.",
    image: "",
  },
  {
    id: 31,
    name: "ZINC OXIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "High-quality zinc compound for rubber, ceramics, and pharmaceutical applications.",
    image: "",
  },
  {
    id: 32,
    name: "MAGNESIUM OXIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Versatile compound used in refractory materials, agriculture, and pharmaceuticals.",
    image: "",
  },
  {
    id: 33,
    name: "NICKEL OXIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Key ingredient in ceramics, batteries, and specialty glass manufacturing.",
    image: "",
  },
  {
    id: 34,
    name: "COPPER OXIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Essential compound for ceramics, pigments, and various chemical reactions.",
    image: "",
  },
  {
    id: 35,
    name: "SODIUM SULPHITE",
    category: "INORGANIC CHEMICAL",
    description:
      "Effective reducing agent and preservative for various industrial processes.",
    image: "",
  },
  {
    id: 36,
    name: "SODIUM BISULPHITE",
    category: "INORGANIC CHEMICAL",
    description:
      "Versatile compound used in water treatment, food preservation, and textile processing.",
    image: "",
  },
  {
    id: 37,
    name: "SODIUM METABISULPHITE",
    category: "INORGANIC CHEMICAL",
    description:
      "Powerful antioxidant and preservative used in food, beverage, and water treatment.",
    image: "",
  },
  {
    id: 38,
    name: "POTASSIUM BISULPHITE",
    category: "INORGANIC CHEMICAL",
    description:
      "Specialized preservative and antioxidant for wine and food production.",
    image: "",
  },
  {
    id: 39,
    name: "SODIUM NITRATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Versatile compound used in fertilizers, glass production, and food preservation.",
    image: "",
  },
  {
    id: 40,
    name: "POTASSIUM NITRATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Multi-purpose compound used in fertilizers, food preservation, and pyrotechnics.",
    image: "",
  },
  {
    id: 41,
    name: "MAGNESIUM NITRATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Specialized magnesium source for agriculture and various industrial applications.",
    image: "",
  },
  {
    id: 42,
    name: "AMMONIUM CARBONATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Versatile compound used in food production, ceramics, and pharmaceutical applications.",
    image: "",
  },
  {
    id: 43,
    name: "BARIUM CARBONATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Essential ingredient in ceramics, brick manufacturing, and specialty glass production.",
    image: "",
  },
  {
    id: 44,
    name: "MANGANESE CARBONATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Specialized compound used in fertilizers, animal feed, and various industrial applications.",
    image: "",
  },
  {
    id: 45,
    name: "ZINC CARBONATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Versatile zinc compound used in ceramics, pigments, and various chemical processes.",
    image: "",
  },
  {
    id: 46,
    name: "CALCIUM CARBONATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Essential mineral used in construction, paper manufacturing, and various industrial applications.",
    image: "",
  },

  // OTHER CHEMICAL
  {
    id: 47,
    name: "LIQUOR AMMONIA",
    category: "OTHER CHEMICAL",
    description:
      "Concentrated ammonia solution for cleaning, refrigeration, and manufacturing applications.",
    image: "/images/solvents.jpg",
  },
  {
    id: 48,
    name: "CITRIC ACID (MONOHYDRATE/ANHYDROUS)",
    category: "OTHER CHEMICAL",
    description:
      "Food-grade organic acid available in monohydrate and anhydrous forms.",
    image: "/images/solvents.jpg",
  },
  {
    id: 49,
    name: "BORIC ACID",
    category: "OTHER CHEMICAL",
    description:
      "Versatile mild acid with antiseptic and insecticidal properties.",
    image: "",
  },
  {
    id: 50,
    name: "SODIUM CARBONATE",
    category: "OTHER CHEMICAL",
    description:
      "Essential alkaline compound for numerous industrial applications.",
    image: "",
  },
  {
    id: 51,
    name: "SODIUM BICARBONATE",
    category: "OTHER CHEMICAL",
    description:
      "Versatile sodium salt with applications in food, pharmaceuticals, and cleaning products.",
    image: "",
  },
  {
    id: 52,
    name: "DI CALCUIM PHOSPHATE",
    category: "OTHER CHEMICAL",
    description:
      "Calcium phosphate compound used in animal feed and fertilizers.",
    image: "",
  },
  {
    id: 53,
    name: "SODIUM TRI-POLY PHOSPHATE",
    category: "OTHER CHEMICAL",
    description:
      "Effective water softener and dispersing agent for detergent formulations.",
    image: "",
  },
  {
    id: 54,
    name: "SODIUM LIGNO SULPHONATE",
    category: "OTHER CHEMICAL",
    description: "Versatile dispersant and binder derived from lignin.",
    image: "",
  },
];

// Extract unique categories for filtering
export const productCategories = Array.from(
  new Set(products.map((product) => product.category))
);
