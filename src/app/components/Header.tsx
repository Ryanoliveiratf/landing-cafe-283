import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./constants";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo283 from "../../imports/images__1_.jpeg";

export function Header({ onReserve }: { onReserve: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{ backgroundColor: scrolled ? "var(--espresso)" : "transparent" }}
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-4 md:px-12">
        <ImageWithFallback
          src={logo283}
          alt="Café 283 — Dois Oito Três"
          className="h-11 w-11 rounded-full object-cover md:h-12 md:w-12"
        />

        <button
          onClick={onReserve}
          className="hidden rounded-[4px] px-5 py-2.5 font-mono uppercase transition-transform hover:scale-[1.02] md:inline-flex"
          style={{
            backgroundColor: "var(--ambar)",
            color: "var(--espresso)",
            fontSize: "13px",
            letterSpacing: "0.06em",
          }}
        >
          Reservar mesa
        </button>

        <a
          href={whatsappLink("Olá! Quero reservar mesa no Dia dos Pais no Café 283.")}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar no WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-[4px] md:hidden"
          style={{ backgroundColor: "var(--ambar)", color: "var(--espresso)" }}
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </header>
  );
}
