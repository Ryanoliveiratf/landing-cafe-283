import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Marina L.",
    text: "Café coado impecável e atendimento que lembra do seu nome. Virou parada obrigatória de domingo.",
  },
  {
    name: "Rafael A.",
    text: "Levei meu pai ano passado e ele não parou de falar. Reservar mesa fez toda a diferença.",
  },
  {
    name: "Juliana S.",
    text: "Ambiente aberto, tranquilo, sem pressa. O melhor lugar da cidade pra sentar e conversar.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="var(--ambar)" color="var(--ambar)" />
      ))}
    </div>
  );
}

export function ProvaSocial() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-16 md:px-12 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div>
          <h2
            className="font-display uppercase"
            style={{
              color: "var(--espresso)",
              fontWeight: 800,
              fontSize: "clamp(28px, 5vw, 44px)",
              letterSpacing: "-0.01em",
            }}
          >
            Quem já sentou aqui
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="rounded-[4px] border p-5"
                style={{ borderColor: "var(--oliva)" }}
              >
                <Stars />
                <p
                  className="mt-3 font-body"
                  style={{ color: "var(--espresso)", fontSize: "16px", lineHeight: 1.6 }}
                >
                  {r.text}
                </p>
                <p
                  className="mt-4 font-mono uppercase"
                  style={{ fontSize: "13px", letterSpacing: "0.04em", color: "var(--oliva)" }}
                >
                  {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="h-fit rounded-[4px] p-6 font-mono"
          style={{ backgroundColor: "var(--espresso)", color: "var(--papel)", fontSize: "14px", letterSpacing: "0.04em" }}
        >
          <p className="uppercase" style={{ color: "var(--ambar)" }}>
            Domingo 09.08.2026
          </p>
          <div className="my-4 border-t border-dashed" style={{ borderColor: "var(--oliva)" }} />
          <p className="uppercase">Aberto ........ 09:00 – 15:00</p>
          <p className="uppercase mt-2">Reserva ....... até 08.08</p>
          <p className="uppercase mt-2">Kit ........... pedidos até 07.08</p>
        </div>
      </div>
    </section>
  );
}
