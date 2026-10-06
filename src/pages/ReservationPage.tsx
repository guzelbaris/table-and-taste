import { useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import "./ReservationPage.css";

type ReservationPageProps = {
  language: "en" | "tr";
};

type SceneImageProps = {
  file: string;
  className: string;
};

function SceneImage({
  file,
  className,
}: SceneImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`reservation-object ${className} ${
        failed ? "reservation-object--fallback" : ""
      }`}
    >
      {!failed && (
        <img
          src={`${import.meta.env.BASE_URL}images/reservation/${file}`}
          alt=""
          draggable={false}
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}

function localDateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const timeSlots = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

export function ReservationPage({
  language,
}: ReservationPageProps) {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(() => localDateValue(new Date()));
  const [time, setTime] = useState("19:00");
  const [submitted, setSubmitted] = useState(false);

  const text =
    language === "en"
      ? {
          eyebrow: "A PLACE AT OUR TABLE",
          title: "Make a reservation",
          intro:
            "Choose your party size, date and time. Watch your table come together.",
          guests: "Guests",
          fewer: "Remove one guest",
          more: "Add one guest",
          date: "Date",
          time: "Time",
          preview: "Your table",
          previewDescription:
            "An illustration of your selected table setting.",
          settings: "Reservation details",
          summary: "Your selection",
          people: "guests",
          submit: "Preview reservation",
          success:
            "Your reservation preview is ready. This portfolio demo does not send or confirm a booking.",
          demo:
            "Portfolio demo — no real booking will be made. Times shown are sample slots, not live availability.",
        }
      : {
          eyebrow: "SOFRAMIZDA SİZE BİR YER",
          title: "Rezervasyon yap",
          intro:
            "Kişi sayısını, tarihi ve saati seç. Sofranın hazırlanışını izle.",
          guests: "Kişi sayısı",
          fewer: "Bir kişi azalt",
          more: "Bir kişi ekle",
          date: "Tarih",
          time: "Saat",
          preview: "Masanız",
          previewDescription:
            "Seçtiğiniz masa düzeninin görsel gösterimi.",
          settings: "Rezervasyon detayları",
          summary: "Seçiminiz",
          people: "kişi",
          submit: "Rezervasyonu ön izle",
          success:
            "Rezervasyon ön izlemeniz hazır. Bu portföy demosu rezervasyon göndermez veya onaylamaz.",
          demo:
            "Portföy demosu — gerçek rezervasyon oluşturulmaz. Saatler örnektir; canlı müsaitlik göstermez.",
        };

  const locale = language === "en" ? "en-GB" : "tr-TR";
  const today = localDateValue(new Date());

  const selectedDate = date
    ? new Date(`${date}T12:00:00`)
    : null;

  const validDate =
    selectedDate && !Number.isNaN(selectedDate.getTime())
      ? selectedDate
      : null;

  const month = validDate
    ? new Intl.DateTimeFormat(locale, { month: "long" }).format(validDate)
    : "—";

  const weekday = validDate
    ? new Intl.DateTimeFormat(locale, { weekday: "long" }).format(validDate)
    : "—";

  const fullDate = validDate
    ? new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(validDate)
    : "—";

  const placeSettings = Array.from({ length: guests }, (_, index) => {
    const topCount = Math.ceil(guests / 2);
    const isTop = index < topCount;
    const countOnSide = isTop ? topCount : guests - topCount;
    const positionOnSide = isTop ? index : index - topCount;

    return {
      index,
      isTop,
      left: ((positionOnSide + 0.5) / countOnSide) * 100,
    };
  });

  const tableStyle = {
    "--table-width": `${70 + (guests - 2) * 7}%`,
  } as CSSProperties;

  function updateGuests(next: number) {
    setGuests(Math.min(6, Math.max(2, next)));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="reservation-page">
      <header className="reservation-introduction">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.intro}</p>
      </header>

      <div className="reservation-layout">
        <section
          className="reservation-preview"
          aria-labelledby="reservation-preview-title"
        >
          <div className="reservation-preview-heading">
            <h2 id="reservation-preview-title">{text.preview}</h2>
            <span>{guests} {text.people}</span>
          </div>

          <p className="reservation-preview-description">
            {text.previewDescription}
          </p>

          <div className="reservation-scene" aria-hidden="true">
            <div className="reservation-wall">
              <div className="reservation-wall-sign">
                Barış Restaurant
              </div>

              <div className="reservation-wall-displays">
                <div className="reservation-calendar">
                  <div className="reservation-calendar-month">
                    {month}
                  </div>
                  <div className="reservation-calendar-day">
                    {validDate?.getDate() ?? "—"}
                  </div>
                  <div className="reservation-calendar-weekday">
                    {weekday}
                  </div>
                  <div className="reservation-calendar-year">
                    {validDate?.getFullYear() ?? "—"}
                  </div>
                </div>

                <div className="reservation-clock">
                  <span>{text.time}</span>
                  <strong>{time}</strong>
                </div>
              </div>
            </div>

            <div className="reservation-table-stage">
              <div
                className="reservation-table"
                style={tableStyle}
              >
                {placeSettings.map((setting) => (
                  <div
                    key={setting.index}
                    className={`reservation-place ${
                      setting.isTop
                        ? "reservation-place--top"
                        : "reservation-place--bottom"
                    }`}
                    style={{ left: `${setting.left}%` }}
                  >
                    <SceneImage
                      file="plate.webp"
                      className="reservation-plate"
                    />
                    <SceneImage
                      file="fork.webp"
                      className="reservation-fork"
                    />
                    <SceneImage
                      file="knife.webp"
                      className="reservation-knife"
                    />
                    <SceneImage
                      file="spoon.webp"
                      className="reservation-spoon"
                    />
                    <SceneImage
                      file="wine-glass.webp"
                      className="reservation-glass"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <form
          className="reservation-form"
          onSubmit={handleSubmit}
          aria-labelledby="reservation-form-title"
        >
          <h2 id="reservation-form-title">{text.settings}</h2>

          <fieldset className="reservation-guests-field">
            <legend>{text.guests}</legend>

            <div className="reservation-guest-controls">
              <button
                type="button"
                aria-label={text.fewer}
                disabled={guests === 2}
                onClick={() => updateGuests(guests - 1)}
              >
                −
              </button>

              <output aria-live="polite">
                <strong>{guests}</strong>
                <span>{text.people}</span>
              </output>

              <button
                type="button"
                aria-label={text.more}
                disabled={guests === 6}
                onClick={() => updateGuests(guests + 1)}
              >
                +
              </button>
            </div>

            <div className="reservation-guest-options">
              {[2, 3, 4, 5, 6].map((count) => (
                <button
                  key={count}
                  type="button"
                  aria-pressed={guests === count}
                  aria-label={`${count} ${text.people}`}
                  onClick={() => updateGuests(count)}
                >
                  {count}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="reservation-field">
            <span>{text.date}</span>
            <input
              type="date"
              required
              min={today}
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
                setSubmitted(false);
              }}
            />
          </label>

          <label className="reservation-field">
            <span>{text.time}</span>
            <select
              value={time}
              onChange={(event) => {
                setTime(event.target.value);
                setSubmitted(false);
              }}
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>

          <div className="reservation-summary">
            <h3>{text.summary}</h3>
            <p>{guests} {text.people}</p>
            <p>{fullDate}</p>
            <p>{time}</p>
          </div>

          <button className="reservation-submit" type="submit">
            {text.submit}
            <span aria-hidden="true">↗</span>
          </button>

          {submitted && (
            <p className="reservation-result" role="status">
              {text.success}
            </p>
          )}

          <p className="reservation-demo-note">{text.demo}</p>
        </form>
      </div>
    </main>
  );
}