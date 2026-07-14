import { MessageCircle, Navigation } from "lucide-react";
import {
  MAPS_DIR_URL,
  ADDRESS,
  PHONE_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  whatsappLink,
} from "./constants";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo283 from "../../imports/images__1_.jpeg";

export function GrupoVIP() {
  return (
    <section style={{ backgroundColor: "var(--espresso)" }}>
      <div className="mx-auto max-w-[1120px] px-5 py-20 text-center md:px-12 md:py-28">
        <h2
          className="font-display uppercase"
          style={{
            color: "var(--papel)",
            fontWeight: 800,
            fontSize: "clamp(28px, 5vw, 44px)",
            letterSpacing: "-0.01em",
          }}
        >
          Ainda decidindo?
        </h2>
        <p
          className="mx-auto mt-4 max-w-lg font-body"
          style={{ color: "var(--papel)", fontSize: "18px", lineHeight: 1.6 }}
        >
          Entre no grupo e a gente te avisa quando abrir horário novo — e quando esgotar.
        </p>
        <a
          href={whatsappLink("Quero entrar no grupo VIP do Café 283 para o Dia dos Pais.")}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-[4px] px-7 py-3.5 font-mono uppercase transition-transform hover:scale-[1.02]"
          style={{
            backgroundColor: "var(--ambar)",
            color: "var(--espresso)",
            fontSize: "14px",
            letterSpacing: "0.06em",
          }}
        >
          <MessageCircle size={18} /> Entrar no grupo VIP
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--espresso)", borderTop: "1px solid var(--oliva)" }}>
      <div className="mx-auto grid max-w-[1120px] gap-8 px-5 py-14 md:grid-cols-3 md:px-12">
        <div>
          <ImageWithFallback
            src={logo283}
            alt="Café 283 — Dois Oito Três"
            className="h-12 w-12 rounded-full object-cover"
          />
          <p className="mt-3 font-body" style={{ color: "var(--papel)", opacity: 0.7, fontSize: "16px" }}>
            Café 283 · João Pessoa/PB
          </p>
        </div>
        <div className="font-mono uppercase" style={{ color: "var(--papel)", fontSize: "13px", letterSpacing: "0.04em", lineHeight: 2 }}>
          <p>{ADDRESS}</p>
          <p>
            <a
              href={whatsappLink("Olá! Tenho uma dúvida sobre o Café 283.")}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>
        <div className="font-mono uppercase" style={{ color: "var(--papel)", fontSize: "13px", letterSpacing: "0.04em", lineHeight: 2 }}>
          <p style={{ color: "var(--oliva)" }}>Funcionamento normal</p>
          <p>Ter–Dom · 08:00 – 18:00</p>
          <p>Segunda · fechado</p>
          <a
            href={MAPS_DIR_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 underline underline-offset-4 transition-opacity hover:opacity-70"
            style={{ color: "var(--papel)" }}
          >
            <Navigation size={13} /> Obter rota
          </a>
        </div>
      </div>
    </footer>
  );
}
