import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { MenuPage } from "./pages/MenuPage";
import { HomePage } from "./pages/HomePage";
import "./App.css";

function getPage() {
  return window.location.hash === "#/menu" ? "menu" : "home";
}

export default function App() {
  const [page, setPage] = useState(getPage);
  const [language, setLanguage] = useState<"en" | "tr">("en");
  const drawer = useRef<HTMLDialogElement>(null);

  const text =
    language === "en"
      ? {
          subtitle: "Authentic Turkish Restaurant",
          home: "Home",
          menu: "Our menu",
          headline: "A warm welcome. A Turkish table.",
          description:
            "Charcoal-grilled favourites, generous meze and the pleasure of sharing a good meal.",
          explore: "Explore our menu",
          storyTitle: "A little taste of our story",
          story:
            "Inspired by the welcoming tables of Turkey, Barış Restaurant brings people together through food made for sharing.",
          open: "Open navigation",
          close: "Close navigation",
          language: "Language",
          rights: "All rights reserved.",
          demo: "A fictional restaurant created for the Table & Taste portfolio project.",
        }
      : {
          subtitle: "Otantik Türk Restoranı",
          home: "Ana sayfa",
          menu: "Menümüz",
          headline: "Sıcak bir karşılama. Bir Türk sofrası.",
          description:
            "Kömür ateşinden lezzetler, zengin mezeler ve güzel bir yemeği paylaşmanın keyfi.",
          explore: "Menümüzü keşfet",
          storyTitle: "Hikâyemizden bir tat",
          story:
            "Türkiye'nin misafirperver sofralarından ilham alan Barış Restaurant, paylaşmak için hazırlanan yemeklerle insanları buluşturur.",
          open: "Gezinmeyi aç",
          close: "Gezinmeyi kapat",
          language: "Dil",
          rights: "Tüm hakları saklıdır.",
          demo: "Table & Taste portföy projesi için oluşturulmuş kurgusal bir restorandır.",
        };

  useEffect(() => {
    function handleNavigation() {
      setPage(getPage());
      drawer.current?.close();
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      page === "menu"
        ? `${text.menu} | Barış Restaurant`
        : "Barış Restaurant | Table & Taste";
  }, [language, page, text.menu]);

  const theme = {
    "--accent": "#e4b88b",
    "--background": "#1a1012",
    "--surface": "#2a1a1e",
  } as CSSProperties;

  function closeNavigation() {
    drawer.current?.close();
  }

  const links = [
    { href: "#/", label: text.home },
    { href: "#/menu", label: text.menu },
  ];

  return (
    <div className="app" style={theme}>
      <header className="header">
        <a className="restaurant-brand" href="#/">
          <span className="brand-mark" aria-hidden="true">B</span>

          <span>
            <strong>Barış Restaurant</strong>
            <small>{text.subtitle}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={text.open}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                (page === "home" && link.href === "#/") ||
                (page === "menu" && link.href === "#/menu")
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-controls">
          <select
            className="header-language"
            aria-label={text.language}
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value as "en" | "tr")
            }
          >
            <option value="en">EN</option>
            <option value="tr">TR</option>
          </select>

          <button
            className="menu-button"
            aria-label={text.open}
            aria-haspopup="dialog"
            aria-controls="restaurant-navigation"
            onClick={() => drawer.current?.showModal()}
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </header>

      <dialog
        ref={drawer}
        id="restaurant-navigation"
        className="drawer"
        aria-label={text.open}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeNavigation();
          }
        }}
      >
        <div className="drawer-content">
          <button
            className="close-button"
            aria-label={text.close}
            onClick={closeNavigation}
            autoFocus
          >
            ×
          </button>

          <p className="drawer-brand">Barış Restaurant</p>

          <nav aria-label={text.open}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeNavigation}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </dialog>

      {page === "menu" ? (
        <MenuPage language={language} />
      ) : (
        <HomePage language={language} />
      )}

      <footer className="restaurant-footer">
        <div className="restaurant-footer-top">
          <div>
            <strong>Barış Restaurant</strong>
            <p>{text.subtitle}</p>
          </div>

          <nav aria-label={text.menu}>
            <a href="#/">{text.home}</a>
            <a href="#/menu">{text.menu}</a>
          </nav>
        </div>

        <div className="restaurant-footer-bottom">
          <p>
            © {new Date().getFullYear()} Barış Restaurant.
            {" "}{text.rights}
          </p>
          <p>{text.demo}</p>
        </div>
      </footer>
    </div>
  );
}