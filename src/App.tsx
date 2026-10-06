import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { cuisines, english } from "./cuisines";
import type { Category, CuisineId, Language } from "./cuisines";
import "./App.css";

const categories: Category[] = ["mains", "sides", "drinks"];

export default function App() {
  const [cuisineId, setCuisineId] = useState<CuisineId>("turkish");
  const [language, setLanguage] = useState<Language>("en");
  const [category, setCategory] = useState<Category>("mains");

  const drawer = useRef<HTMLDialogElement>(null);
  const cuisine = cuisines[cuisineId];
  const labels = language === "en" ? english : cuisine.labels;

  const dishes = cuisine.dishes.filter(
    (dish) => dish.category === category,
  );

  const price = new Intl.NumberFormat(
    language === "en" ? "en-GB" : language,
    { style: "currency", currency: "GBP" },
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function changeCuisine(next: CuisineId) {
    setCuisineId(next);
    setLanguage("en");
    setCategory("mains");
  }

  function closeNavigation() {
    drawer.current?.close();
  }

  const theme = {
    "--accent": cuisine.accent,
    "--background": cuisine.background,
    "--surface": cuisine.surface,
  } as CSSProperties;

  const navigation = [
    { href: "#menu", text: labels.menu },
    { href: "#reservation", text: labels.reservation },
    { href: "#about", text: labels.about },
    { href: "#contact", text: labels.contact },
  ];

  return (
    <div className="app" style={theme}>
      <header className="header">
        <a className="brand" href="#home" aria-label="Table & Taste">
          <span className="brand-mark" aria-hidden="true">T&T</span>
          <span>Table <span className="amp">&</span> Taste</span>
        </a>

        <nav className="desktop-nav" aria-label={labels.menu}>
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>{link.text}</a>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => drawer.current?.showModal()}
          aria-label={labels.navigation}
          aria-haspopup="dialog"
          aria-controls="navigation-drawer"
        >
          <span aria-hidden="true">☰</span>
        </button>
      </header>

      <dialog
        id="navigation-drawer"
        className="drawer"
        ref={drawer}
        aria-label={labels.navigation}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeNavigation();
        }}
      >
        <div className="drawer-content">
          <button
            className="close-button"
            onClick={closeNavigation}
            aria-label={labels.close}
            autoFocus
          >
            ×
          </button>

          <p className="drawer-brand">Table & Taste</p>

          <nav aria-label={labels.menu}>
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeNavigation}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </dialog>

      <main>
        <section id="home" className="hero">
          <div className="preferences">
            <label>
              <span>{labels.cuisine}</span>
              <select
                value={cuisineId}
                onChange={(event) =>
                  changeCuisine(event.target.value as CuisineId)
                }
              >
                {(Object.keys(cuisines) as CuisineId[]).map((id) => (
                  <option key={id} value={id}>
                    {cuisines[id].name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>{labels.language}</span>
              <select
                value={language}
                onChange={(event) =>
                  setLanguage(event.target.value as Language)
                }
              >
                <option value="en">English</option>
                <option value={cuisine.language}>
                  {cuisine.languageName}
                </option>
              </select>
            </label>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">TABLE & TASTE</p>
              <h1>{labels.headline}</h1>
              <p className="intro">{labels.intro}</p>
              <a className="primary-button" href="#menu">
                {labels.explore} <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="orbit" />
              <div className="plate">
                <span className="hero-food">{cuisine.hero}</span>
              </div>
              <span className="art-caption">{cuisine.name}</span>
            </div>
          </div>
        </section>

        <section id="menu" className="section">
          <div className="section-heading">
            <h2>{labels.menu}</h2>
            <span>{cuisine.name}</span>
          </div>

          <div className="categories" role="group" aria-label={labels.menu}>
            {categories.map((item) => (
              <button
                key={item}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {labels[item]}
              </button>
            ))}
          </div>

          <div className="dish-grid">
            {dishes.map((dish) => (
              <article className="dish-card" key={dish.id}>
                <div
                  className={`dish-art ${dish.category === "drinks" ? "drink" : ""}`}
                  aria-hidden="true"
                >
                  <span>{dish.visual}</span>
                </div>

                <div className="dish-heading">
                  <h3>
                    {language === "en" ? dish.name.en : dish.name.local}
                  </h3>
                  <span className="price">{price.format(dish.price)}</span>
                </div>

                <p>
                  {language === "en"
                    ? dish.description.en
                    : dish.description.local}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section information">
          <h2>{labels.about}</h2>
          <p>{labels.aboutText}</p>
        </section>

        <section id="reservation" className="section information">
          <h2>{labels.reservation}</h2>
          <p>{labels.contactText}</p>
          <p className="coming-soon">{labels.request}</p>
        </section>

        <section id="contact" className="section information">
          <h2>{labels.contact}</h2>
          <p>{labels.contactText}</p>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Table & Taste</footer>
    </div>
  );
}