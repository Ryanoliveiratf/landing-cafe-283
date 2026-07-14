import { Minus, Plus } from "lucide-react";
import { TIME_SLOTS } from "./constants";

export function Horarios({
  selectedTime,
  onSelect,
  people,
  setPeople,
  onReserve,
}: {
  selectedTime: string | null;
  onSelect: (t: string) => void;
  people: number;
  setPeople: (n: number) => void;
  onReserve: () => void;
}) {
  return (
    <section id="horarios" className="mx-auto max-w-[1120px] px-5 py-16 md:px-12 md:py-28">
      <h2
        className="font-display uppercase"
        style={{
          color: "var(--espresso)",
          fontWeight: 800,
          fontSize: "clamp(28px, 5vw, 44px)",
          letterSpacing: "-0.01em",
        }}
      >
        Escolha o horário
      </h2>

      <div className="mt-8 flex flex-wrap gap-3">
        {TIME_SLOTS.map((time) => {
          const isSelected = selectedTime === time;
          return (
            <button
              key={time}
              onClick={() => onSelect(time)}
              className="rounded-[4px] border px-5 py-3 font-mono transition-colors"
              style={{
                fontSize: "14px",
                letterSpacing: "0.04em",
                borderColor: "var(--petroleo)",
                backgroundColor: isSelected ? "var(--petroleo)" : "transparent",
                color: isSelected ? "var(--papel)" : "var(--petroleo)",
              }}
            >
              {time}
            </button>
          );
        })}
      </div>

      <p
        className="mt-4 font-body"
        style={{ fontSize: "16px", color: "var(--oliva)" }}
      >
        Escolha um horário para ver a disponibilidade.
      </p>

      <div className="mt-10">
        <p
          className="font-mono uppercase"
          style={{ fontSize: "13px", letterSpacing: "0.06em", color: "var(--oliva)" }}
        >
          Pessoas
        </p>
        <div className="mt-3 flex items-center gap-4">
          <button
            onClick={() => setPeople(Math.max(1, people - 1))}
            aria-label="Menos pessoas"
            className="flex h-11 w-11 items-center justify-center rounded-[4px] border transition-colors hover:bg-petroleo hover:text-papel"
            style={{ borderColor: "var(--petroleo)", color: "var(--petroleo)" }}
          >
            <Minus size={18} />
          </button>
          <span
            className="font-mono"
            style={{ fontSize: "28px", color: "var(--espresso)", minWidth: "2ch", textAlign: "center" }}
          >
            {people}
          </span>
          <button
            onClick={() => setPeople(Math.min(20, people + 1))}
            aria-label="Mais pessoas"
            className="flex h-11 w-11 items-center justify-center rounded-[4px] border transition-colors hover:bg-petroleo hover:text-papel"
            style={{ borderColor: "var(--petroleo)", color: "var(--petroleo)" }}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <button
        onClick={onReserve}
        disabled={!selectedTime}
        className="mt-10 w-full rounded-[4px] px-6 py-3.5 font-mono uppercase transition-transform enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        style={{
          backgroundColor: "var(--ambar)",
          color: "var(--espresso)",
          fontSize: "14px",
          letterSpacing: "0.06em",
        }}
      >
        {selectedTime ? `Reservar mesa · ${selectedTime}` : "Reservar mesa"}
      </button>
    </section>
  );
}
