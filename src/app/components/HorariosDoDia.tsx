function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-1 font-mono" style={{ fontSize: "13px" }}>
      <span className="uppercase" style={{ letterSpacing: "0.04em", color: "var(--espresso)" }}>
        {label}
      </span>
      <span
        className="min-w-0 flex-1 translate-y-[-3px] overflow-hidden whitespace-nowrap"
        style={{ color: "var(--oliva)" }}
      >
        {"·".repeat(80)}
      </span>
      <span style={{ color: "var(--espresso)" }}>{value}</span>
    </div>
  );
}

export function HorariosDoDia() {
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
        Horários do dia
      </h2>

      <div
        className="mt-8 max-w-xl rounded-[4px] border p-6 md:p-7"
        style={{ backgroundColor: "var(--papel)", borderColor: "var(--oliva)" }}
      >
        <p
          className="font-mono uppercase"
          style={{ fontSize: "13px", letterSpacing: "0.08em", color: "var(--oliva)" }}
        >
          Dia dos Pais · Dom 09.08.2026
        </p>

        <div className="my-4 border-t border-dashed" style={{ borderColor: "var(--oliva)" }} />

        <div className="space-y-2.5">
          <Row label="Aberto" value="09:00 – 15:00" />
          <Row label="Horários de reserva" value="09:00 · 11:00 · 12:30 · 14:00 · 15:00" />
          <Row label="Reservas até" value="08.08" />
          <Row label="Kit do Pai · pedidos até" value="07.08" />
        </div>
      </div>

      <p
        className="mt-6 max-w-xl font-body"
        style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--espresso)" }}
      >
        As mesas são confirmadas por ordem de reserva. A disponibilidade de cada horário
        aparece na hora de confirmar.
      </p>
    </section>
  );
}
