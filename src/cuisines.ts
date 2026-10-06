export type Category = "mains" | "sides" | "drinks";
export type Language = "en" | "tr" | "it" | "el" | "es" | "ja";

type LocalText = {
  en: string;
  local: string;
};

type Labels = {
  menu: string;
  reservation: string;
  about: string;
  contact: string;
  headline: string;
  intro: string;
  explore: string;
  mains: string;
  sides: string;
  drinks: string;
  aboutText: string;
  contactText: string;
  request: string;
  close: string;
  navigation: string;
  cuisine: string;
  language: string;
};

type Dish = {
  id: string;
  category: Category;
  name: LocalText;
  description: LocalText;
  price: number;
  visual: string;
};

type Cuisine = {
  name: string;
  language: Language;
  languageName: string;
  accent: string;
  background: string;
  surface: string;
  hero: string;
  labels: Labels;
  dishes: Dish[];
};

export const english: Labels = {
  menu: "Menu",
  reservation: "Make a reservation",
  about: "About us",
  contact: "Contact",
  headline: "A new taste of tradition.",
  intro: "Classic flavours. A fresh perspective. Find your next favourite.",
  explore: "Explore the menu",
  mains: "Mains",
  sides: "Sides",
  drinks: "Drinks",
  aboutText:
    "Table & Taste is a restaurant concept celebrating familiar flavours through modern design.",
  contactText:
    "This is a demo restaurant. Booking details will be added before launch.",
  request: "Reservations coming soon",
  close: "Close navigation",
  navigation: "Open navigation",
  cuisine: "Cuisine",
  language: "Language",
};

export const cuisines = {
  turkish: {
    name: "Turkish",
    language: "tr",
    languageName: "Türkçe",
    accent: "#f8a77b",
    background: "#18110f",
    surface: "#2a1d18",
    hero: "🥙",
    labels: {
      menu: "Menü",
      reservation: "Rezervasyon yap",
      about: "Hakkımızda",
      contact: "İletişim",
      headline: "Geleneklere yeni bir tat.",
      intro: "Klasik lezzetler. Yeni bir bakış. Yeni favorinizi keşfedin.",
      explore: "Menüyü keşfet",
      mains: "Ana yemekler",
      sides: "Yan lezzetler",
      drinks: "İçecekler",
      aboutText:
        "Table & Taste, tanıdık lezzetleri modern tasarımla buluşturan bir restoran konseptidir.",
      contactText:
        "Bu bir demo restorandır. Rezervasyon bilgileri açılıştan önce eklenecektir.",
      request: "Rezervasyonlar yakında",
      close: "Gezinmeyi kapat",
      navigation: "Gezinmeyi aç",
      cuisine: "Mutfak",
      language: "Dil",
    },
    dishes: [
      {
        id: "adana",
        category: "mains",
        name: { en: "Adana kebab", local: "Adana kebap" },
        description: {
          en: "Grilled lamb, flatbread and sumac onions.",
          local: "Izgara kuzu eti, lavaş ve sumaklı soğan.",
        },
        price: 19,
        visual: "🥙",
      },
      {
        id: "cacik",
        category: "sides",
        name: { en: "Cucumber yoghurt", local: "Cacık" },
        description: {
          en: "Yoghurt, cucumber, garlic and mint.",
          local: "Yoğurt, salatalık, sarımsak ve nane.",
        },
        price: 6,
        visual: "🥣",
      },
      {
        id: "tea",
        category: "drinks",
        name: { en: "Turkish tea", local: "Türk çayı" },
        description: {
          en: "Freshly brewed black tea.",
          local: "Taze demlenmiş siyah çay.",
        },
        price: 3,
        visual: "☕",
      },
    ],
  },
  italian: {
    name: "Italian",
    language: "it",
    languageName: "Italiano",
    accent: "#c0d995",
    background: "#111813",
    surface: "#1d2a21",
    hero: "🍝",
    labels: {
      menu: "Menù",
      reservation: "Prenota un tavolo",
      about: "Chi siamo",
      contact: "Contatti",
      headline: "Un nuovo gusto della tradizione.",
      intro: "Sapori classici. Una nuova prospettiva. Scopri il tuo prossimo preferito.",
      explore: "Scopri il menù",
      mains: "Piatti principali",
      sides: "Contorni",
      drinks: "Bevande",
      aboutText:
        "Table & Taste è un concept di ristorante che unisce sapori familiari e design moderno.",
      contactText:
        "Questo è un ristorante dimostrativo. I dettagli per prenotare saranno aggiunti prima dell'apertura.",
      request: "Prenotazioni disponibili a breve",
      close: "Chiudi navigazione",
      navigation: "Apri navigazione",
      cuisine: "Cucina",
      language: "Lingua",
    },
    dishes: [
      {
        id: "pasta",
        category: "mains",
        name: { en: "Tomato tagliatelle", local: "Tagliatelle al pomodoro" },
        description: {
          en: "Tagliatelle, tomato sauce and fresh basil.",
          local: "Tagliatelle, salsa di pomodoro e basilico fresco.",
        },
        price: 17,
        visual: "🍝",
      },
      {
        id: "salad",
        category: "sides",
        name: { en: "Green salad", local: "Insalata verde" },
        description: {
          en: "Mixed leaves with lemon dressing.",
          local: "Insalata mista con condimento al limone.",
        },
        price: 6,
        visual: "🥗",
      },
      {
        id: "espresso",
        category: "drinks",
        name: { en: "Espresso", local: "Espresso" },
        description: {
          en: "A rich, freshly brewed espresso.",
          local: "Un espresso intenso appena preparato.",
        },
        price: 3,
        visual: "☕",
      },
    ],
  },
  greek: {
    name: "Greek",
    language: "el",
    languageName: "Ελληνικά",
    accent: "#93cafa",
    background: "#101720",
    surface: "#1b2938",
    hero: "🥗",
    labels: {
      menu: "Μενού",
      reservation: "Κάντε κράτηση",
      about: "Σχετικά με εμάς",
      contact: "Επικοινωνία",
      headline: "Μια νέα γεύση της παράδοσης.",
      intro: "Κλασικές γεύσεις. Μια νέα ματιά. Ανακαλύψτε το επόμενο αγαπημένο σας.",
      explore: "Δείτε το μενού",
      mains: "Κυρίως πιάτα",
      sides: "Συνοδευτικά",
      drinks: "Ποτά",
      aboutText:
        "Το Table & Taste είναι μια ιδέα εστιατορίου που συνδυάζει γνώριμες γεύσεις με μοντέρνο σχεδιασμό.",
      contactText:
        "Αυτό είναι ένα δοκιμαστικό εστιατόριο. Οι πληροφορίες κρατήσεων θα προστεθούν πριν από την έναρξη.",
      request: "Οι κρατήσεις θα είναι σύντομα διαθέσιμες",
      close: "Κλείσιμο πλοήγησης",
      navigation: "Άνοιγμα πλοήγησης",
      cuisine: "Κουζίνα",
      language: "Γλώσσα",
    },
    dishes: [
      {
        id: "souvlaki",
        category: "mains",
        name: { en: "Chicken souvlaki", local: "Σουβλάκι κοτόπουλο" },
        description: {
          en: "Grilled chicken, pita and lemon.",
          local: "Ψητό κοτόπουλο, πίτα και λεμόνι.",
        },
        price: 18,
        visual: "🍢",
      },
      {
        id: "greek-salad",
        category: "sides",
        name: { en: "Greek salad", local: "Χωριάτικη σαλάτα" },
        description: {
          en: "Tomato, cucumber, olives and feta.",
          local: "Ντομάτα, αγγούρι, ελιές και φέτα.",
        },
        price: 8,
        visual: "🥗",
      },
      {
        id: "lemonade",
        category: "drinks",
        name: { en: "Lemonade", local: "Λεμονάδα" },
        description: {
          en: "Refreshing lemonade over ice.",
          local: "Δροσιστική λεμονάδα με πάγο.",
        },
        price: 4,
        visual: "🍋",
      },
    ],
  },
  mexican: {
    name: "Mexican",
    language: "es",
    languageName: "Español",
    accent: "#f6bf65",
    background: "#1c1410",
    surface: "#302219",
    hero: "🌮",
    labels: {
      menu: "Menú",
      reservation: "Reservar una mesa",
      about: "Sobre nosotros",
      contact: "Contacto",
      headline: "Un nuevo sabor de la tradición.",
      intro: "Sabores clásicos. Una nueva perspectiva. Descubre tu próximo favorito.",
      explore: "Explorar el menú",
      mains: "Platos principales",
      sides: "Acompañamientos",
      drinks: "Bebidas",
      aboutText:
        "Table & Taste es un concepto de restaurante que combina sabores familiares con diseño moderno.",
      contactText:
        "Este es un restaurante de demostración. Los detalles de reserva se añadirán antes de la apertura.",
      request: "Reservas próximamente",
      close: "Cerrar navegación",
      navigation: "Abrir navegación",
      cuisine: "Cocina",
      language: "Idioma",
    },
    dishes: [
      {
        id: "tacos",
        category: "mains",
        name: { en: "Chicken tacos", local: "Tacos de pollo" },
        description: {
          en: "Chicken, salsa, coriander and lime.",
          local: "Pollo, salsa, cilantro y lima.",
        },
        price: 16,
        visual: "🌮",
      },
      {
        id: "guacamole",
        category: "sides",
        name: { en: "Guacamole", local: "Guacamole" },
        description: {
          en: "Avocado, lime and tortilla chips.",
          local: "Aguacate, lima y totopos.",
        },
        price: 7,
        visual: "🥑",
      },
      {
        id: "agua",
        category: "drinks",
        name: { en: "Hibiscus cooler", local: "Agua de jamaica" },
        description: {
          en: "A chilled hibiscus infusion.",
          local: "Una infusión fría de hibisco.",
        },
        price: 4,
        visual: "🍹",
      },
    ],
  },
  japanese: {
    name: "Japanese",
    language: "ja",
    languageName: "日本語",
    accent: "#f3acba",
    background: "#191218",
    surface: "#2c202a",
    hero: "🍣",
    labels: {
      menu: "メニュー",
      reservation: "予約する",
      about: "私たちについて",
      contact: "お問い合わせ",
      headline: "伝統に、新しい味わいを。",
      intro: "親しみのある味に、新しい視点を。次のお気に入りを見つけましょう。",
      explore: "メニューを見る",
      mains: "メイン",
      sides: "サイド",
      drinks: "ドリンク",
      aboutText:
        "Table & Tasteは、親しみのある味とモダンなデザインを組み合わせたレストランのコンセプトです。",
      contactText:
        "これはデモ用のレストランです。予約情報はオープン前に追加されます。",
      request: "予約は近日公開",
      close: "ナビゲーションを閉じる",
      navigation: "ナビゲーションを開く",
      cuisine: "料理",
      language: "言語",
    },
    dishes: [
      {
        id: "sushi",
        category: "mains",
        name: { en: "Salmon sushi", local: "サーモン寿司" },
        description: {
          en: "Salmon, seasoned rice and pickled ginger.",
          local: "サーモン、酢飯、ガリ。",
        },
        price: 20,
        visual: "🍣",
      },
      {
        id: "edamame",
        category: "sides",
        name: { en: "Edamame", local: "枝豆" },
        description: {
          en: "Steamed edamame with sea salt.",
          local: "海塩を添えた蒸し枝豆。",
        },
        price: 5,
        visual: "🫛",
      },
      {
        id: "matcha",
        category: "drinks",
        name: { en: "Matcha tea", local: "抹茶" },
        description: {
          en: "Freshly whisked green tea.",
          local: "点てたての抹茶。",
        },
        price: 4,
        visual: "🍵",
      },
    ],
  },
} satisfies Record<string, Cuisine>;

export type CuisineId = keyof typeof cuisines;