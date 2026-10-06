import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { cuisines } from "./cuisines";
import type { CuisineId } from "./cuisines";
import { ReservationPage } from "./pages/ReservationPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import "./App.css";
import "./pages/InformationPages.css";

type Page = "home" | "menu" | "reservation" | "about" | "contact";

function getPage(): Page {
  switch (window.location.hash) {
    case "#/menu":
      return "menu";
    case "#/reservation":
      return "reservation";
    case "#/about":
      return "about";
    case "#/contact":
      return "contact";
    default:
      return "home";
  }
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage);
  const [themeId, setThemeId] = useState<CuisineId>("turkish");
  const [language, setLanguage] = useState<"en" | "tr">("en");
  const drawer = useRef<HTMLDialogElement>(null);

  const text =
    language === "en"
      ? {
          subtitle: "Authentic Turkish Restaurant",
          home: "Home",
          menu: "Our menu",
          reservation: "Make a reservation",
          about: "About us",
          contact: "Contact",
          open: "Open navigation",
          close: "Close navigation",
          language: "Language",
          explore: "Explore",
          hours: "Sample opening hours",
          weekdays: "Mon – Thu",
          weekend: "Fri – Sat",
          sunday: "Sun",
          footerDescription:
            "Turkish flavours, warm hospitality and a table made for sharing.",
          rights: "All rights reserved.",
          demo:
            "A fictional restaurant for the Table & Taste portfolio project. Forms and reservations are demonstrations.",
        }
      : {
          subtitle: "Otantik Türk Restoranı",
          home: "Ana sayfa",
          menu: "Menümüz",
          reservation: "Rezervasyon yap",
          about: "Hakkımızda",
          contact: "İletişim",
          open: "Gezinmeyi aç",
          close: "Gezinmeyi kapat",
          language: "Dil",
          explore: "Keşfet",
          hours: "Örnek çalışma saatleri",
          weekdays: "Pzt – Per",
          weekend: "Cum – Cmt",
          sunday: "Paz",
          footerDescription:
            "Türk lezzetleri, sıcak misafirperverlik ve paylaşmak için hazırlanmış bir sofra.",
          rights: "Tüm hakları saklıdır.",
          demo:
            "Table & Taste portföy projesi için kurgusal restorandır. Formlar ve rezervasyonlar demo amaçlıdır.",
        };

  const links: { href: string; label: string; page: Page }[] = [
    { href: "#/", label: text.home, page: "home" },
    { href: "#/menu", label: text.menu, page: "menu" },
    { href: "#/about", label: text.about, page: "about" },
    {
      href: "#/reservation",
      label: text.reservation,
      page: "reservation",
    },
    { href: "#/contact", label: text.contact, page: "contact" },
  ];

  useEffect(() => {
    function handleNavigation() {
      setPage(getPage());
      drawer.current?.close();

      // Ana sayfadaki hikâye bağlantısını da destekler.
      if (window.location.hash === "#our-story") {
        requestAnimationFrame(() => {
          document.getElementById("our-story")?.scrollIntoView({
            behavior: window.matchMedia(
              "(prefers-reduced-motion: reduce)",
            ).matches
              ? "instant"
              : "smooth",
          });
        });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }

    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);

  const pageTitle = text[page];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${pageTitle} | Barış Restaurant`;
  }, [language, pageTitle]);

  const selectedTheme = cuisines[themeId];

const theme = {
  "--accent": selectedTheme.accent,
  "--background": selectedTheme.background,
  "--surface": selectedTheme.surface,
} as CSSProperties;
const themeLabels: Record<CuisineId, string> =
  language === "en"
    ? {
        turkish: "Terracotta",
        italian: "Olive",
        greek: "Aegean",
        mexican: "Amber",
        japanese: "Sakura",
      }
    : {
        turkish: "Terrakota",
        italian: "Zeytin",
        greek: "Ege",
        mexican: "Kehribar",
        japanese: "Sakura",
      };

  function closeNavigation() {
    drawer.current?.close();
  }

  return (
    <div className="app" style={theme}>
      <header className="premium-header">
  <div className="premium-header-main">
    <a className="premium-brand" href="#/">
      <img
        className="premium-brand-logo"
        src={`${import.meta.env.BASE_URL}images/brand/baris-logo.png`}
        alt=""
        width={56}
        height={56}
      />

      <span className="premium-brand-copy">
        <strong>Barış Restaurant</strong>
        <small>{text.subtitle}</small>
      </span>
    </a>

    <nav
      className="premium-navigation"
      aria-label={text.explore}
    >
      {links
        .filter((link) => link.page !== "reservation")
        .map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={page === link.page ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
    </nav>

    <div className="premium-header-actions">
      <a
        className="premium-reservation-link"
        href="#/reservation"
      >
        {text.reservation}
        <span aria-hidden="true">↗</span>
      </a>

      <select
        className="premium-language"
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
        className="premium-menu-button"
        aria-label={text.open}
        aria-haspopup="dialog"
        aria-controls="restaurant-navigation"
        onClick={() => drawer.current?.showModal()}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>
  </div>

  <div className="premium-theme-bar">
    <span className="premium-theme-caption">
      TABLE & TASTE
    </span>

    <label className="premium-theme-picker">
      <span>{language === "en" ? "Colour palette" : "Renk paleti"}</span>

      <span
        className="premium-theme-dot"
        aria-hidden="true"
      />

      <select
        value={themeId}
        onChange={(event) =>
          setThemeId(event.target.value as CuisineId)
        }
      >
        {(Object.keys(cuisines) as CuisineId[]).map((id) => (
          <option key={id} value={id}>
            {themeLabels[id]}
          </option>
        ))}
      </select>
    </label>
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

          <nav aria-label={text.explore}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={page === link.page ? "page" : undefined}
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
      ) : page === "reservation" ? (
        <ReservationPage language={language} />
      ) : page === "about" ? (
        <AboutPage language={language} />
      ) : page === "contact" ? (
        <ContactPage language={language} />
      ) : (
        <HomePage language={language} />
      )}

      <footer className="site-footer">
        <div className="site-footer-content">
          <div>
            <a className="site-footer-brand" href="#/">
              Barış Restaurant
            </a>
            <p className="site-footer-description">
              {text.footerDescription}
            </p>
          </div>

          <div>
            <h2>{text.explore}</h2>
            <nav aria-label={text.explore}>
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2>{text.hours}</h2>
            <p className="site-footer-hours">
              {text.weekdays}: 12:00 – 22:00<br />
              {text.weekend}: 12:00 – 23:00<br />
              {text.sunday}: 12:00 – 21:00
            </p>
          </div>
        </div>

        <div className="site-footer-bottom">
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