export type MenuCategory =
  | "starters"
  | "mains"
  | "sides"
  | "desserts"
  | "drinks";

type TranslatedText = {
  en: string;
  tr: string;
};

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: TranslatedText;
  description: TranslatedText;
  price: number;
  vegetarian?: boolean;
};

export const menuCategories: {
  id: MenuCategory;
  label: TranslatedText;
}[] = [
  {
    id: "starters",
    label: { en: "Starters", tr: "Başlangıçlar" },
  },
  {
    id: "mains",
    label: { en: "Main courses", tr: "Ana yemekler" },
  },
  {
    id: "sides",
    label: { en: "Sides", tr: "Yan lezzetler" },
  },
  {
    id: "desserts",
    label: { en: "Desserts", tr: "Tatlılar" },
  },
  {
    id: "drinks",
    label: { en: "Drinks", tr: "İçecekler" },
  },
];

export const turkishMenu: MenuItem[] = [
  // STARTERS
  {
    id: "hummus",
    category: "starters",
    name: { en: "Hummus", tr: "Humus" },
    description: {
      en: "Chickpeas blended with tahini, lemon and garlic, finished with olive oil.",
      tr: "Tahin, limon ve sarımsakla hazırlanan, zeytinyağıyla tamamlanan nohut ezmesi.",
    },
    price: 6.5,
    vegetarian: true,
  },
  {
    id: "haydari",
    category: "starters",
    name: { en: "Haydari", tr: "Haydari" },
    description: {
      en: "Thick strained yoghurt with garlic, dried mint and olive oil.",
      tr: "Sarımsak, kuru nane ve zeytinyağıyla hazırlanan süzme yoğurt.",
    },
    price: 6.5,
    vegetarian: true,
  },
  {
    id: "ezme",
    category: "starters",
    name: { en: "Spicy ezme", tr: "Acılı ezme" },
    description: {
      en: "Finely chopped tomatoes, peppers and herbs with pomegranate molasses.",
      tr: "Nar ekşisiyle tatlandırılan ince kıyılmış domates, biber ve yeşillikler.",
    },
    price: 6.5,
    vegetarian: true,
  },
  {
    id: "sigara-boregi",
    category: "starters",
    name: { en: "Feta filo rolls", tr: "Sigara böreği" },
    description: {
      en: "Crisp filo pastry filled with feta and parsley, served with yoghurt dip.",
      tr: "Beyaz peynir ve maydanoz dolgulu çıtır börekler, yoğurt sosuyla.",
    },
    price: 7.5,
    vegetarian: true,
  },
  {
    id: "mercimek",
    category: "starters",
    name: { en: "Red lentil soup", tr: "Mercimek çorbası" },
    description: {
      en: "Smooth red lentil soup with warming spices, served with lemon.",
      tr: "Baharatlarla hazırlanan kırmızı mercimek çorbası, limon eşliğinde.",
    },
    price: 6.5,
    vegetarian: true,
  },

  // MAIN COURSES
  {
    id: "adana",
    category: "mains",
    name: { en: "Adana kebab", tr: "Adana kebap" },
    description: {
      en: "Chargrilled minced lamb with red pepper, served with rice, flatbread and salad.",
      tr: "Kırmızı biberli kıyma kebabı; pilav, lavaş ve salata eşliğinde.",
    },
    price: 19.5,
  },
  {
    id: "lamb-shish",
    category: "mains",
    name: { en: "Lamb shish", tr: "Kuzu şiş" },
    description: {
      en: "Marinated lamb pieces grilled over charcoal, with rice and grilled vegetables.",
      tr: "Marine edilmiş, kömür ateşinde pişirilmiş kuzu eti; pilav ve közlenmiş sebzelerle.",
    },
    price: 23.5,
  },
  {
    id: "chicken-shish",
    category: "mains",
    name: { en: "Chicken shish", tr: "Tavuk şiş" },
    description: {
      en: "Yoghurt-marinated chicken, chargrilled and served with rice, salad and flatbread.",
      tr: "Yoğurtla marine edilmiş ızgara tavuk; pilav, salata ve lavaşla.",
    },
    price: 18.5,
  },
  {
    id: "iskender",
    category: "mains",
    name: { en: "İskender kebab", tr: "İskender kebap" },
    description: {
      en: "Thinly sliced döner over toasted bread with tomato sauce, yoghurt and melted butter.",
      tr: "Kızarmış pide üzerinde döner; domates sosu, yoğurt ve eritilmiş tereyağıyla.",
    },
    price: 22,
  },
  {
    id: "imam-bayildi",
    category: "mains",
    name: { en: "İmam bayıldı", tr: "İmam bayıldı" },
    description: {
      en: "Aubergine filled with tomato, onion and garlic, cooked in olive oil and served with rice.",
      tr: "Domates, soğan ve sarımsak dolgulu zeytinyağlı patlıcan, pilav eşliğinde.",
    },
    price: 16.5,
    vegetarian: true,
  },

  // SIDES
  {
    id: "rice",
    category: "sides",
    name: { en: "Butter rice", tr: "Tereyağlı pilav" },
    description: {
      en: "Fluffy rice cooked with butter.",
      tr: "Tereyağıyla pişirilmiş tane tane pirinç pilavı.",
    },
    price: 4.5,
    vegetarian: true,
  },
  {
    id: "bulgur",
    category: "sides",
    name: { en: "Bulgur pilaf", tr: "Bulgur pilavı" },
    description: {
      en: "Bulgur cooked with tomato, onion and green pepper.",
      tr: "Domates, soğan ve yeşil biberle hazırlanan bulgur pilavı.",
    },
    price: 4.5,
    vegetarian: true,
  },
  {
    id: "salad",
    category: "sides",
    name: { en: "Shepherd’s salad", tr: "Çoban salata" },
    description: {
      en: "Tomato, cucumber, pepper and parsley with lemon and olive oil.",
      tr: "Domates, salatalık, biber ve maydanoz; limon ve zeytinyağıyla.",
    },
    price: 5.5,
    vegetarian: true,
  },
  {
    id: "chips",
    category: "sides",
    name: { en: "Seasoned chips", tr: "Baharatlı patates" },
    description: {
      en: "Golden chips with paprika and oregano.",
      tr: "Toz biber ve kekikle tatlandırılmış kızarmış patates.",
    },
    price: 4.5,
    vegetarian: true,
  },
  {
    id: "flatbread",
    category: "sides",
    name: { en: "Warm flatbread", tr: "Sıcak lavaş" },
    description: {
      en: "Warm flatbread brushed with olive oil.",
      tr: "Zeytinyağıyla hafifçe yağlanmış sıcak lavaş.",
    },
    price: 3.5,
    vegetarian: true,
  },

  // DESSERTS
  {
    id: "baklava",
    category: "desserts",
    name: { en: "Pistachio baklava", tr: "Fıstıklı baklava" },
    description: {
      en: "Layers of crisp filo pastry with pistachios and fragrant syrup.",
      tr: "Antep fıstığı ve şerbetle hazırlanan ince katlı çıtır baklava.",
    },
    price: 7,
    vegetarian: true,
  },
  {
    id: "kunefe",
    category: "desserts",
    name: { en: "Künefe", tr: "Künefe" },
    description: {
      en: "Warm shredded pastry with melting cheese, syrup and pistachios.",
      tr: "Eriyen peynir dolgulu sıcak tel kadayıf; şerbet ve Antep fıstığıyla.",
    },
    price: 8.5,
    vegetarian: true,
  },
  {
    id: "sutlac",
    category: "desserts",
    name: { en: "Baked rice pudding", tr: "Fırın sütlaç" },
    description: {
      en: "Traditional milk and rice pudding with a caramelised baked top.",
      tr: "Üzeri fırında kızartılmış geleneksel sütlü pirinç tatlısı.",
    },
    price: 6,
    vegetarian: true,
  },
  {
    id: "kazandibi",
    category: "desserts",
    name: { en: "Kazandibi", tr: "Kazandibi" },
    description: {
      en: "Silky milk pudding with a caramelised base.",
      tr: "Karamelize tabanıyla hazırlanan yumuşak sütlü tatlı.",
    },
    price: 6.5,
    vegetarian: true,
  },
  {
    id: "revani",
    category: "desserts",
    name: { en: "Revani", tr: "Revani" },
    description: {
      en: "Light semolina cake soaked in lemon syrup.",
      tr: "Limonlu şerbetle tatlandırılan hafif irmik tatlısı.",
    },
    price: 6,
    vegetarian: true,
  },

  // DRINKS
  {
    id: "ayran",
    category: "drinks",
    name: { en: "Ayran", tr: "Ayran" },
    description: {
      en: "A chilled yoghurt drink with a pinch of salt.",
      tr: "Hafif tuzlu, soğuk yoğurt içeceği.",
    },
    price: 3.5,
    vegetarian: true,
  },
  {
    id: "tea",
    category: "drinks",
    name: { en: "Turkish tea", tr: "Türk çayı" },
    description: {
      en: "Freshly brewed black tea, served in a traditional glass.",
      tr: "İnce belli bardakta servis edilen taze demlenmiş siyah çay.",
    },
    price: 2.5,
    vegetarian: true,
  },
  {
    id: "coffee",
    category: "drinks",
    name: { en: "Turkish coffee", tr: "Türk kahvesi" },
    description: {
      en: "Traditional finely ground coffee, served with Turkish delight.",
      tr: "Lokum eşliğinde servis edilen geleneksel Türk kahvesi.",
    },
    price: 3.5,
    vegetarian: true,
  },
  {
    id: "lemonade",
    category: "drinks",
    name: { en: "House lemonade", tr: "Ev yapımı limonata" },
    description: {
      en: "Fresh lemon juice with mint, served over ice.",
      tr: "Taze limon ve naneyle hazırlanan, buzla servis edilen limonata.",
    },
    price: 4,
    vegetarian: true,
  },
  {
    id: "water",
    category: "drinks",
    name: { en: "Mineral water", tr: "Maden suyu" },
    description: {
      en: "Chilled sparkling mineral water.",
      tr: "Soğuk servis edilen doğal maden suyu.",
    },
    price: 2.5,
    vegetarian: true,
  },
];