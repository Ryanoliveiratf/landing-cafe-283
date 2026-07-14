import { ImageWithFallback } from "./figma/ImageWithFallback";
import fachada from "../../imports/WhatsApp_Image_2026-07-14_at_14.33.14.jpeg";

export function AmbienteBand() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden md:h-[480px]">
      <ImageWithFallback
        src={fachada}
        alt="Fachada do Café 283 com o letreiro Dois Oito Três em Manaíra, João Pessoa"
        className="h-full w-full object-cover object-[center_18%] md:object-[center_32%]"
      />
      {/* Escurecimento para o texto ganhar contraste — mais forte na base no mobile */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(28,22,20,0.25) 0%, rgba(28,22,20,0.15) 35%, rgba(28,22,20,0.75) 72%, rgba(28,22,20,0.96) 100%)",
        }}
        aria-hidden
      />

      {/* Texto sobreposto */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1120px] px-5 pb-10 md:px-12 md:pb-14">
          <p
            className="font-mono uppercase"
            style={{ fontSize: "13px", letterSpacing: "0.06em", color: "var(--ambar)" }}
          >
            Manaíra · João Pessoa
          </p>
          <h2
            className="mt-2 max-w-xl font-display uppercase"
            style={{
              color: "var(--papel)",
              fontWeight: 800,
              fontSize: "clamp(28px, 5vw, 48px)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            O 283 te espera na melhor mesa da cidade.
          </h2>
        </div>
      </div>
    </section>
  );
}
