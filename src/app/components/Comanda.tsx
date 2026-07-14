const serrated: React.CSSProperties = {
  height: "10px",
  backgroundImage:
    "linear-gradient(135deg, var(--papel) 50%, transparent 50%), linear-gradient(225deg, var(--papel) 50%, transparent 50%)",
  backgroundSize: "12px 12px",
  backgroundRepeat: "repeat-x",
};

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-1 font-mono" style={{ fontSize: "13px" }}>
      <span className="uppercase" style={{ letterSpacing: "0.04em" }}>
        {label}
      </span>
      <span
        className="min-w-0 flex-1 translate-y-[-3px] overflow-hidden whitespace-nowrap"
        style={{ color: "var(--oliva)" }}
      >
        {"·".repeat(60)}
      </span>
      <span style={{ color: "var(--espresso)" }}>{value}</span>
    </div>
  );
}

export function Comanda({
  selectedTime,
  people,
  onConfirm,
  compact = false,
}: {
  selectedTime: string | null;
  people: number;
  onConfirm: () => void;
  compact?: boolean;
}) {
  const canConfirm = !!selectedTime;

  return (
    <div
      className="w-full"
      style={{ backgroundColor: "var(--papel)", filter: "drop-shadow(0 12px 30px rgba(28,22,20,0.18))" }}
    >
      <div style={{ ...serrated, transform: "rotate(180deg)" }} aria-hidden />
      <div className={compact ? "px-6 pb-5 pt-1" : "px-7 pb-7 pt-2"}>
        <div className="text-center font-mono" style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
          <p className="uppercase" style={{ color: "var(--espresso)", fontWeight: 500 }}>
            Café 283 · João Pessoa
          </p>
          <p className="uppercase" style={{ color: "var(--espresso)" }}>
            Dia dos Pais
          </p>
          <p className="uppercase" style={{ color: "var(--oliva)" }}>
            Dom 09.08.2026
          </p>
        </div>

        <div
          className="my-4 border-t border-dashed"
          style={{ borderColor: "var(--oliva)" }}
          aria-hidden
        />

        <div className="space-y-2">
          <Line label="Horário" value={selectedTime ?? "—"} />
          <Line label="Pessoas" value={String(people)} />
          <Line label="Mesa" value="A CONFIRMAR" />
        </div>

        <div
          className="my-4 border-t border-dashed"
          style={{ borderColor: "var(--oliva)" }}
          aria-hidden
        />

        <button
          onClick={onConfirm}
          disabled={!canConfirm}
          className="w-full rounded-[4px] px-4 py-3 font-mono uppercase transition-transform enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
          style={{
            backgroundColor: "var(--ambar)",
            color: "var(--espresso)",
            fontSize: "13px",
            letterSpacing: "0.06em",
          }}
        >
          Confirmar reserva
        </button>

        <p
          className="mt-3 text-center font-mono uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.04em", color: "var(--oliva)" }}
        >
          {canConfirm ? "Disponibilidade confirmada na próxima etapa" : "Escolha um horário"}
        </p>
      </div>
      <div style={serrated} aria-hidden />
    </div>
  );
}
