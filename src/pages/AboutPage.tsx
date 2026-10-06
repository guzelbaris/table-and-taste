import { RestaurantImage } from "../components/RestaurantImage";
import "./InformationPages.css";

type Props = {
  language: "en" | "tr";
};

export function AboutPage({ language }: Props) {
  const text =
    language === "en"
      ? {
          eyebrow: "OUR STORY",
          title: "A table worth gathering around.",
          introduction:
            "Inspired by Turkish hospitality, Barış Restaurant celebrates the food and conversations that bring people together.",
          imageAlt: "A warm restaurant interior with natural wood details.",
          storyTitle: "Welcome to our table.",
          story:
            "Our concept begins with a simple idea: a good meal is even better when shared. Colourful meze, charcoal-grilled dishes and freshly poured tea set the scene for an unhurried evening.",
          storySecond:
            "Barış Restaurant is a fictional restaurant created for the Table & Taste portfolio project. Its identity brings traditional Turkish flavours into a contemporary digital experience.",
          valuesTitle: "What inspires our kitchen",
          values: [
            {
              title: "Food for sharing",
              description:
                "Small plates, generous flavours and a menu that invites you to try something together.",
            },
            {
              title: "The charcoal grill",
              description:
                "Adana kebab, lamb shish and chicken shish take their place at the heart of our menu.",
            },
            {
              title: "A warm welcome",
              description:
                "A thoughtful setting, familiar comforts and room for another person at the table.",
            },
          ],
          ending: "Come hungry. Leave inspired.",
          menu: "Explore the menu",
          reservation: "Plan your visit",
        }
      : {
          eyebrow: "HİKÂYEMİZ",
          title: "Buluşmaya değer bir sofra.",
          introduction:
            "Türk misafirperverliğinden ilham alan Barış Restaurant, insanları bir araya getiren yemekleri ve sohbetleri kutluyor.",
          imageAlt: "Doğal ahşap detaylarıyla sıcak bir restoran iç mekânı.",
          storyTitle: "Soframıza hoş geldiniz.",
          story:
            "Konseptimiz basit bir fikirle başlıyor: güzel bir yemek, paylaşıldığında daha da güzeldir. Renkli mezeler, kömür ateşinde pişen yemekler ve taze demlenmiş çay, keyifli bir akşamın zeminini hazırlar.",
          storySecond:
            "Barış Restaurant, Table & Taste portföy projesi için oluşturulmuş kurgusal bir restorandır. Kimliği, geleneksel Türk lezzetlerini çağdaş bir dijital deneyimle buluşturur.",
          valuesTitle: "Mutfağımıza ilham verenler",
          values: [
            {
              title: "Paylaşılan lezzetler",
              description:
                "Küçük tabaklar, zengin tatlar ve birlikte yeni lezzetler keşfetmeye davet eden bir menü.",
            },
            {
              title: "Kömür ateşi",
              description:
                "Adana kebap, kuzu şiş ve tavuk şiş menümüzün merkezinde yer alıyor.",
            },
            {
              title: "Sıcak bir karşılama",
              description:
                "Özenli bir ortam, tanıdık sıcaklık ve sofrada bir kişiye daha yer.",
            },
          ],
          ending: "İştahla gel. İlhamla ayrıl.",
          menu: "Menüyü keşfet",
          reservation: "Ziyaretini planla",
        };

  return (
    <main className="info-page">
      <header className="info-introduction">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.introduction}</p>
      </header>

      <section className="about-story">
        <div className="about-image">
          <RestaurantImage
            file="interior.webp"
            alt={text.imageAlt}
          />
        </div>

        <div className="info-copy">
          <h2>{text.storyTitle}</h2>
          <p>{text.story}</p>
          <p>{text.storySecond}</p>
          <span className="about-signature">Barış Restaurant</span>
        </div>
      </section>

      <section className="about-values">
        <h2>{text.valuesTitle}</h2>

        <div className="about-values-grid">
          {text.values.map((value, index) => (
            <article className="info-card" key={value.title}>
              <span className="info-card-number">
                0{index + 1}
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-ending">
        <h2>{text.ending}</h2>

        <div className="info-actions">
          <a className="primary-button" href="#/menu">
            {text.menu}
          </a>
          <a className="info-secondary-link" href="#/reservation">
            {text.reservation} ↗
          </a>
        </div>
      </section>
    </main>
  );
}