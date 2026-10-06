import { useState } from "react";
import type { MenuItem } from "../turkish-menu";
import { menuPresentation } from "../menu-presentation";
import { RestaurantImage } from "./RestaurantImage";

type MenuCardProps = {
  item: MenuItem;
  language: "en" | "tr";
};

export function MenuCard({
  item,
  language,
}: MenuCardProps) {
  const [expanded, setExpanded] = useState(false);

  const presentation = menuPresentation[item.id];
  const variant = presentation?.variant ?? "standard";
  const isPro = variant === "pro";

  const detailsId = `menu-details-${item.id}`;

  const text =
    language === "en"
      ? {
          ingredients: "Ingredients",
          vegetarian: "Vegetarian",
          open: "View ingredients",
          close: "Hide details",
        }
      : {
          ingredients: "İçindekiler",
          vegetarian: "Vejetaryen",
          open: "İçindekileri gör",
          close: "Detayları kapat",
        };

  const price = new Intl.NumberFormat(
    language === "en" ? "en-GB" : "tr-TR",
    {
      style: "currency",
      currency: "GBP",
    },
  ).format(item.price);

  const heading = (
    <div className="menu-card-heading">
      <h2>{item.name[language]}</h2>
      <span className="menu-card-price">{price}</span>
    </div>
  );

  const details = (
    <>


      {presentation && (
        <div className="menu-card-ingredients">
          <h3>{text.ingredients}</h3>

          <ul>
            {presentation.ingredients[language].map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {item.vegetarian && (
        <span className="vegetarian-label">
          {text.vegetarian}
        </span>
      )}
    </>
  );

  const summary = presentation ? (
    <div className="menu-feature-summary">
      <div className="menu-feature-visual" aria-hidden="true">
        <div className="menu-feature-orbit" />

        <div
          className={`menu-feature-plate ${
            isPro ? "menu-feature-plate--rotating" : ""
          }`}
        >
          <RestaurantImage
            file={presentation.image}
            alt=""
          />
        </div>
      </div>

      <div className="menu-feature-copy">
  {heading}

  <p className="menu-card-description">
    {item.description[language]}
  </p>

        {presentation  && (
          <span className="menu-card-hint">
            {expanded ? text.close : text.open}

            <span className="menu-card-chevron" aria-hidden="true">
              {expanded ? "−" : "+"}
            </span>
          </span>
        )}
      </div>
    </div>
  ) : null;

return (
  <article className={`menu-card menu-card--${variant}`}>
    {presentation ? (
      <>
        <button
          className="menu-card-toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((current) => !current)}
        >
          {summary}
        </button>

        <div
          id={detailsId}
          className="menu-feature-details"
          hidden={!expanded}
        >
          {details}
        </div>
      </>
    ) : (
  <div className="menu-card-body">
    {heading}

    <p className="menu-card-description">
      {item.description[language]}
    </p>

    {details}
  </div>
)}
  </article>
);
}