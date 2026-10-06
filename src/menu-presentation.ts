type TranslatedIngredients = {
  en: string[];
  tr: string[];
};

export type MenuPresentation = {
  variant: "pro" | "plus";
  image: string;
  ingredients: TranslatedIngredients;
};

export const menuPresentation: Record<
  string,
  MenuPresentation | undefined
> = {
  hummus: {
    variant: "pro",
    image: "hummus-top.webp",
    ingredients: {
      en: [
        "Chickpeas",
        "Tahini",
        "Lemon juice",
        "Garlic",
        "Olive oil",
        "Paprika",
      ],
      tr: [
        "Nohut",
        "Tahin",
        "Limon suyu",
        "Sarımsak",
        "Zeytinyağı",
        "Toz kırmızı biber",
      ],
    },
  },

  "sigara-boregi": {
    variant: "plus",
    image: "borek.webp",
    ingredients: {
      en: [
        "Filo pastry",
        "Feta cheese",
        "Parsley",
        "Yoghurt dip",
      ],
      tr: [
        "Yufka",
        "Beyaz peynir",
        "Maydanoz",
        "Yoğurt sosu",
      ],
    },
  },

  adana: {
    variant: "pro",
    image: "adana-top.webp",
    ingredients: {
      en: [
        "Minced lamb",
        "Red pepper",
        "Rice",
        "Flatbread",
        "Tomato",
        "Onion salad",
      ],
      tr: [
        "Kuzu kıyma",
        "Kırmızı biber",
        "Pilav",
        "Lavaş",
        "Domates",
        "Soğan salatası",
      ],
    },
  },

  "imam-bayildi": {
    variant: "plus",
    image: "imam-bayildi.webp",
    ingredients: {
      en: [
        "Aubergine",
        "Tomato",
        "Onion",
        "Garlic",
        "Olive oil",
        "Rice",
      ],
      tr: [
        "Patlıcan",
        "Domates",
        "Soğan",
        "Sarımsak",
        "Zeytinyağı",
        "Pilav",
      ],
    },
  },

  salad: {
    variant: "pro",
    image: "salad-top.webp",
    ingredients: {
      en: [
        "Tomato",
        "Cucumber",
        "Green pepper",
        "Parsley",
        "Lemon juice",
        "Olive oil",
      ],
      tr: [
        "Domates",
        "Salatalık",
        "Yeşil biber",
        "Maydanoz",
        "Limon suyu",
        "Zeytinyağı",
      ],
    },
  },

  bulgur: {
    variant: "plus",
    image: "bulgur.webp",
    ingredients: {
      en: [
        "Bulgur wheat",
        "Tomato",
        "Onion",
        "Green pepper",
        "Olive oil",
      ],
      tr: [
        "Bulgur",
        "Domates",
        "Soğan",
        "Yeşil biber",
        "Zeytinyağı",
      ],
    },
  },

  baklava: {
    variant: "pro",
    image: "baklava-top.webp",
    ingredients: {
      en: [
        "Filo pastry",
        "Pistachios",
        "Butter",
        "Sugar syrup",
      ],
      tr: [
        "Baklavalık yufka",
        "Antep fıstığı",
        "Tereyağı",
        "Şeker şerbeti",
      ],
    },
  },

  kunefe: {
    variant: "plus",
    image: "kunefe.webp",
    ingredients: {
      en: [
        "Shredded filo pastry",
        "Künefe cheese",
        "Butter",
        "Sugar syrup",
        "Pistachios",
      ],
      tr: [
        "Tel kadayıf",
        "Künefe peyniri",
        "Tereyağı",
        "Şeker şerbeti",
        "Antep fıstığı",
      ],
    },
  },

  coffee: {
    variant: "pro",
    image: "coffee-top.webp",
    ingredients: {
      en: [
        "Finely ground Turkish coffee",
        "Water",
        "Sugar, optional",
        "Turkish delight served alongside",
      ],
      tr: [
        "İnce öğütülmüş Türk kahvesi",
        "Su",
        "İsteğe bağlı şeker",
        "Yanında servis edilen lokum",
      ],
    },
  },

  tea: {
    variant: "plus",
    image: "tea.webp",
    ingredients: {
      en: [
        "Black tea",
        "Water",
        "Sugar served separately",
      ],
      tr: [
        "Siyah çay",
        "Su",
        "Ayrı servis edilen şeker",
      ],
    },
  },
};