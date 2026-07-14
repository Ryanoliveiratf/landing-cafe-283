import { Navigation } from "lucide-react";
import { ADDRESS, MAPS_DIR_URL } from "./constants";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.125170261818!2d-34.83167682500174!3d-7.1114900928920415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd2335a20d71%3A0x9fb1df228be9643b!2zMjgzIENBRsOJ!5e0!3m2!1spt-BR!2sbr!4v1784052683659!5m2!1spt-BR!2sbr";

export function ComoChegar() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-16 md:px-12 md:py-28">
      <h2
        className="font-display uppercase"
        style={{
          color: "var(--espresso)",
          fontWeight: 800,
          fontSize: "clamp(28px, 5vw, 44px)",
          letterSpacing: "-0.01em",
        }}
      >
        Como chegar
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
        {/* Mapa do Google Maps — 283 Café */}
        <div
          className="aspect-[4/3] overflow-hidden rounded-[4px] border md:aspect-[3/2]"
          style={{ borderColor: "var(--oliva)" }}
        >
          <iframe
            title="Localização do Café 283 no Google Maps"
            src={MAP_EMBED_URL}
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div>
          <p
            className="font-body"
            style={{ fontSize: "18px", lineHeight: 1.6, color: "var(--espresso)" }}
          >
            {ADDRESS}
          </p>
          <p
            className="mt-3 font-body"
            style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--oliva)" }}
          >
            Funcionamento normal: Ter–Dom, das 08:00 às 18:00. Segunda fechado.
          </p>

          <a
            href={MAPS_DIR_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-[4px] border px-6 py-3.5 font-mono uppercase transition-colors hover:bg-petroleo hover:text-papel"
            style={{
              borderColor: "var(--petroleo)",
              color: "var(--petroleo)",
              fontSize: "14px",
              letterSpacing: "0.06em",
            }}
          >
            <Navigation size={18} /> Obter rota
          </a>
        </div>
      </div>
    </section>
  );
}
