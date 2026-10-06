import { useState } from "react";
import {
  menuCategories,
  turkishMenu,
} from "../turkish-menu";
import type { MenuCategory } from "../turkish-menu";
import { MenuCard } from "../components/MenuCard";
import { menuPresentation } from "../menu-presentation";
import "./MenuPage.css";

type MenuPageProps = {
  language: "en" | "tr";
};

export function MenuPage({
  language,
}: MenuPageProps) {
  const [category, setCategory] =
    useState<MenuCategory>("starters");

  const variantOrder = {
  pro: 0,
  plus: 1,
  standard: 2,
};

const items = turkishMenu
  .filter((item) => item.category === category)
  .sort((a, b) => {
    const aVariant = menuPresentation[a.id]?.variant ?? "standard";
    const bVariant = menuPresentation[b.id]?.variant ?? "standard";

    return variantOrder[aVariant] - variantOrder[bVariant];
  });

  const text =
    language === "en"
      ? {
          eyebrow: "FROM OUR KITCHEN",
          title: "Our menu",
          description:
            "Generous meze, charcoal-grilled favourites and something sweet to finish.",
          categories: "Menu categories",
          note:
            "Portfolio demonstration menu. Dishes, ingredients and prices are illustrative.",
        }
      : {
          eyebrow: "MUTFAĞIMIZDAN",
          title: "Menümüz",
          description:
            "Zengin mezeler, kömür ateşinden lezzetler ve tatlı bir kapanış.",
          categories: "Menü kategorileri",
          note:
            "Portföy için hazırlanmış örnek menüdür. Yemekler, içerikler ve fiyatlar temsilidir.",
        };

  const currentCategory = menuCategories.find(
    (item) => item.id === category,
  );

  return (
    <main className="menu-page">
      <header className="menu-introduction">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.description}</p>
      </header>

      <div
        className="menu-category-list"
        role="group"
        aria-label={text.categories}
      >
        {menuCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={category === item.id}
            onClick={() => setCategory(item.id)}
          >
            {item.label[language]}
          </button>
        ))}
      </div>

      <section
  className="menu-products"
  aria-label={currentCategory?.label[language]}
>
  {[0, 1].map((column) => (
    <div className="menu-product-column" key={column}>
      {items.map((item, index) =>
        index % 2 === column ? (
          <div
            className="menu-product-entry"
            style={{ order: index }}
            key={item.id}
          >
            <MenuCard
              item={item}
              language={language}
            />
          </div>
        ) : null,
      )}
    </div>
  ))}
</section>

      <p className="menu-demo-note">{text.note}</p>
    </main>
  );
}