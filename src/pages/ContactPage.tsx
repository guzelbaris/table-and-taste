import { useState } from "react";
import type { FormEvent } from "react";
import "./InformationPages.css";

type Props = {
  language: "en" | "tr";
};

export function ContactPage({ language }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const text =
    language === "en"
      ? {
          eyebrow: "LET’S TALK",
          title: "Contact us",
          introduction:
            "A question about the menu or planning a gathering? Explore our contact page concept.",
          location: "Our location",
          locationDescription:
            "A fictional Turkish restaurant concept inspired by London's dining scene. No physical venue is associated with this project.",
          hours: "Sample opening hours",
          weekdays: "Monday – Thursday",
          weekend: "Friday – Saturday",
          sunday: "Sunday",
          reservationTitle: "Planning a visit?",
          reservationDescription:
            "Try our interactive table preview for parties of two to six.",
          reservation: "Make a reservation",
          formTitle: "Message preview",
          name: "Your name",
          email: "Email address",
          subject: "Subject",
          message: "Your message",
          submit: "Preview message",
          success:
            "Your message preview is ready. Nothing has been sent or saved.",
          demo:
            "Portfolio demo. This form does not send messages. Please use sample details.",
        }
      : {
          eyebrow: "BİZE ULAŞIN",
          title: "İletişim",
          introduction:
            "Menü hakkında bir sorunuz mu var, yoksa birlikte bir yemek mi planlıyorsunuz? İletişim sayfası konseptimizi keşfedin.",
          location: "Konumumuz",
          locationDescription:
            "Londra'nın restoran kültüründen ilham alan kurgusal bir Türk restoranı konseptidir. Bu projeye bağlı fiziksel bir işletme yoktur.",
          hours: "Örnek çalışma saatleri",
          weekdays: "Pazartesi – Perşembe",
          weekend: "Cuma – Cumartesi",
          sunday: "Pazar",
          reservationTitle: "Bir ziyaret mi planlıyorsunuz?",
          reservationDescription:
            "İki ile altı kişilik gruplar için etkileşimli masa ön izlememizi deneyin.",
          reservation: "Rezervasyon yap",
          formTitle: "Mesaj ön izlemesi",
          name: "Adınız",
          email: "E-posta adresi",
          subject: "Konu",
          message: "Mesajınız",
          submit: "Mesajı ön izle",
          success:
            "Mesaj ön izlemeniz hazır. Hiçbir mesaj gönderilmedi veya kaydedilmedi.",
          demo:
            "Portföy demosudur. Bu form mesaj göndermez. Lütfen örnek bilgiler kullanın.",
        };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="info-page">
      <header className="info-introduction">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.introduction}</p>
      </header>

      <div className="contact-layout">
        <div className="contact-information">
          <section className="info-card">
            <h2>{text.location}</h2>
            <p>{text.locationDescription}</p>
          </section>

          <section className="info-card">
            <h2>{text.hours}</h2>

            <dl className="opening-hours">
              <div>
                <dt>{text.weekdays}</dt>
                <dd>12:00 – 22:00</dd>
              </div>
              <div>
                <dt>{text.weekend}</dt>
                <dd>12:00 – 23:00</dd>
              </div>
              <div>
                <dt>{text.sunday}</dt>
                <dd>12:00 – 21:00</dd>
              </div>
            </dl>
          </section>

          <section className="info-card">
            <h2>{text.reservationTitle}</h2>
            <p>{text.reservationDescription}</p>

            <a className="info-secondary-link" href="#/reservation">
              {text.reservation} ↗
            </a>
          </section>
        </div>

        <form
          className="contact-form info-card"
          onSubmit={handleSubmit}
          onChange={() => setSubmitted(false)}
        >
          <h2>{text.formTitle}</h2>
          <p className="contact-demo-note">{text.demo}</p>

          <label>
            <span>{text.name}</span>
            <input
              name="name"
              type="text"
              required
              maxLength={80}
              autoComplete="off"
            />
          </label>

          <label>
            <span>{text.email}</span>
            <input
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="off"
            />
          </label>

          <label>
            <span>{text.subject}</span>
            <input
              name="subject"
              type="text"
              required
              maxLength={120}
            />
          </label>

          <label>
            <span>{text.message}</span>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
            />
          </label>

          <button className="contact-submit" type="submit">
            {text.submit} <span aria-hidden="true">↗</span>
          </button>

          {submitted && (
            <p className="contact-result" role="status">
              {text.success}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}