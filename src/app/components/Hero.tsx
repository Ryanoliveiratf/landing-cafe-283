import { Countdown } from "./Countdown";

export function Hero({
  onReserve,
  onKit,
}: {
  onReserve: () => void;
  onKit: () => void;
}) {
  return (
    <section className="px-5 pb-14 pt-28 md:px-0 md:pb-20 md:pt-36">
      <p
        className="font-mono uppercase"
        style={{ fontSize: "13px", letterSpacing: "0.06em", color: "var(--oliva)" }}
      >
        Domingo · 09.08.2026 · João Pessoa
      </p>

      <h1
        className="mt-5 max-w-2xl font-display uppercase"
        style={{
          color: "var(--espresso)",
          fontWeight: 800,
          fontSize: "clamp(40px, 8vw, 72px)",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
        }}
      >O melhor presente não vem embrulhado. Vem servido.</h1>

      <p
        className="mt-6 max-w-lg font-body"
        style={{ color: "var(--espresso)", fontSize: "18px", lineHeight: 1.6 }}
      >Menu especial, café de verdade e mesas contadas. O 283 abre{" "}
        <span style={{ whiteSpace: "nowrap" }}>das 9h às 15h</span> no domingo do Dia dos Pais e a reserva vai por ordem de chegada. no domingo do Dia dos
        Pais — e a reserva vai por ordem de chegada.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={onReserve}
          className="rounded-[4px] px-6 py-3.5 font-mono uppercase transition-transform hover:scale-[1.02]"
          style={{
            backgroundColor: "var(--ambar)",
            color: "var(--espresso)",
            fontSize: "14px",
            letterSpacing: "0.06em",
          }}
        >
          Reservar mesa
        </button>
        <button
          onClick={onKit}
          className="rounded-[4px] border px-6 py-3.5 font-mono uppercase transition-colors hover:bg-petroleo hover:text-papel"
          style={{
            borderColor: "var(--petroleo)",
            color: "var(--petroleo)",
            fontSize: "14px",
            letterSpacing: "0.06em",
          }}
        >
          Garantir o Kit do Pai
        </button>
      </div>

      <div className="mt-8">
        <Countdown />
      </div>
    </section>
  );
}
