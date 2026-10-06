import { RestaurantImage } from "../components/RestaurantImage";
import "./HomePage.css";

type HomePageProps = {
  language: "en" | "tr";
};

export function HomePage({ language }: HomePageProps) {
  const text =
    language === "en"
      ? {
          eyebrow: "AUTHENTIC TURKISH RESTAURANT",
          reservation: "Make a reservation",
          headline: "Good food.\nWarm company.",
          introduction:
            "Gather around our table for generous meze, charcoal-grilled favourites and a little Turkish hospitality.",
          menu: "Discover our menu",
          storyLink: "Our story",
          heroAlt:
            "A Turkish feast of grilled kebab, colourful meze and warm flatbread.",
          signatureEyebrow: "MADE TO BE SHARED",
          signatureTitle: "A few favourites from our kitchen.",
          signatureDescription:
            "Start with something fresh, enjoy something from the grill and leave room for something sweet.",
          allMenu: "View the full menu",
          dishes: [
            {
              name: "Adana kebab",
              description:
                "Chargrilled lamb, warm flatbread and the unmistakable flavour of the grill.",
              price: "£19.50",
              file: "adana.webp",
            },
            {
              name: "Meze selection",
              description:
                "A colourful introduction to our table: hummus, haydari and spicy ezme.",
              price: "From £6.50 per dish",
              file: "meze.webp",
            },
            {
              name: "Pistachio baklava",
              description:
                "Delicate pastry, fragrant syrup and pistachios. A sweet finish worth sharing.",
              price: "£7.00",
              file: "baklava.webp",
            },
          ],
          storyEyebrow: "WELCOME TO BARIŞ",
          storyTitle: "More than a meal.\nA moment together.",
          storyDescription:
            "Our fictional restaurant takes its inspiration from the welcoming tables of Turkey, where another chair is always pulled up and good food is made to be shared.",
          storySecond:
            "From the first bowl of meze to the last glass of tea, our concept celebrates thoughtful cooking, warm surroundings and unhurried conversation.",
          interiorAlt:
            "A welcoming restaurant interior with warm lighting and natural wood.",
          grillEyebrow: "FROM THE CHARCOAL GRILL",
          grillTitle: "Tradition, with a fresh perspective.",
          grillDescription:
            "Familiar flavours take centre stage. Explore our Adana kebab, lamb shish and chicken shish, served with the sides that make a Turkish table complete.",
          finalTitle: "Find your next favourite.",
          finalDescription:
            "Explore five courses of flavour, from the first meze to the final sip.",
        }
      : {
          eyebrow: "OTANTİK TÜRK RESTORANI",
          headline: "Güzel yemek.\nSıcak sohbet.",
          introduction:
            "Zengin mezeler, kömür ateşinden lezzetler ve Türk misafirperverliği için soframızda buluşalım.",
          menu: "Menümüzü keşfet",
          storyLink: "Hikâyemiz",
          heroAlt:
            "Izgara kebap, renkli mezeler ve sıcak lavaştan oluşan Türk sofrası.",
          signatureEyebrow: "PAYLAŞMAK İÇİN HAZIRLANDI",
          signatureTitle: "Mutfağımızın sevilen lezzetleri.",
          signatureDescription:
            "Taze bir başlangıç, ateşten gelen bir lezzet ve ardından tatlı bir kapanış.",
          allMenu: "Tüm menüyü gör",
          dishes: [
            {
              name: "Adana kebap",
              description:
                "Kömür ateşinde pişen kuzu eti, sıcak lavaş ve ızgaranın eşsiz aroması.",
              price: "£19,50",
              file: "adana.webp",
            },
            {
              name: "Meze seçkisi",
              description:
                "Soframıza renkli bir başlangıç: humus, haydari ve acılı ezme.",
              price: "Her meze £6,50'den başlayan fiyatlarla",
              file: "meze.webp",
            },
            {
              name: "Fıstıklı baklava",
              description:
                "İnce katlı hamur, şerbet ve Antep fıstığı. Paylaşmaya değer tatlı bir kapanış.",
              price: "£7,00",
              file: "baklava.webp",
            },
          ],
          storyEyebrow: "BARIŞ'A HOŞ GELDİNİZ",
          storyTitle: "Bir yemekten fazlası.\nBirlikte geçen bir an.",
          storyDescription:
            "Kurgusal restoranımız, bir sandalye daha çekilen ve güzel yemeklerin paylaşıldığı Türkiye'nin misafirperver sofralarından ilham alıyor.",
          storySecond:
            "İlk mezeden son bardak çaya kadar konseptimiz özenli yemekleri, sıcak bir ortamı ve aceleye gelmeyen sohbetleri bir araya getiriyor.",
          interiorAlt:
            "Sıcak aydınlatma ve doğal ahşap detaylarla döşenmiş davetkâr restoran iç mekânı.",
          grillEyebrow: "KÖMÜR ATEŞİNDEN",
          grillTitle: "Geleneklere yeni bir bakış.",
          grillDescription:
            "Tanıdık lezzetler sofranın merkezinde. Adana kebap, kuzu şiş ve tavuk şişi Türk sofrasını tamamlayan yan lezzetlerle keşfedin.",
          finalTitle: "Yeni favorini keşfet.",
          finalDescription:
            "İlk mezeden son yuduma kadar beş kategoride lezzetleri keşfet.",
        };

  return (
    <main className="restaurant-home">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="home-eyebrow">{text.eyebrow}</p>
          <h1>{text.headline}</h1>
          <p className="home-hero-description">
            {text.introduction}
          </p>

          <div className="home-hero-actions">
            <a className="home-button" href="#/menu">
              {text.menu}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="home-text-link" href="#/reservation">
  {text.reservation}
</a>

            <a className="home-text-link" href="#our-story">
              {text.storyLink}
            </a>
          </div>
        </div>

        <div className="home-hero-visual">
          <RestaurantImage
            file="hero.webp"
            alt={text.heroAlt}
            priority
          />
          <span className="home-image-label">
            Barış Restaurant
          </span>
        </div>
      </section>

      <section className="home-signatures home-container">
        <div className="home-section-heading">
          <div>
            <p className="home-eyebrow">
              {text.signatureEyebrow}
            </p>
            <h2>{text.signatureTitle}</h2>
            <p className="home-section-description">
              {text.signatureDescription}
            </p>
          </div>

          <a className="home-text-link" href="#/menu">
            {text.allMenu} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="home-signature-grid">
          {text.dishes.map((dish) => (
            <article className="home-food-card" key={dish.file}>
              <div className="home-food-image">
                <RestaurantImage
                  file={dish.file}
                  alt=""
                />
              </div>

              <div className="home-food-copy">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <span className="home-food-price">
                  {dish.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="our-story"
        className="home-story home-container"
      >
        <div className="home-story-image">
          <RestaurantImage
            file="interior.webp"
            alt={text.interiorAlt}
          />
        </div>

        <div className="home-story-copy">
          <p className="home-eyebrow">{text.storyEyebrow}</p>
          <h2>{text.storyTitle}</h2>
          <p>{text.storyDescription}</p>
          <p>{text.storySecond}</p>
          <span className="home-story-signature">
            Barış Restaurant
          </span>
        </div>
      </section>

      <section className="home-grill">
        <div className="home-container home-grill-layout">
          <div className="home-grill-copy">
            <p className="home-eyebrow">{text.grillEyebrow}</p>
            <h2>{text.grillTitle}</h2>
            <p>{text.grillDescription}</p>

            <a className="home-button" href="#/menu">
              {text.menu}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="home-rotating-visual" aria-hidden="true">
            <div className="home-plate-ring" />

            <div className="home-rotating-plate">
              <RestaurantImage
                file="adana-top.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-final home-container">
        <p className="home-eyebrow">BARIŞ RESTAURANT</p>
        <h2>{text.finalTitle}</h2>
        <p>{text.finalDescription}</p>

        <a className="home-button" href="#/menu">
          {text.allMenu}
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}