import { useEffect, useState } from "react";
import { MessageCircle, Navigation } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import {
  MAPS_DIR_URL,
  RESERVATION_MODE,
  TAGME_WIDGET_URL,
  TIME_SLOTS,
  whatsappLink,
} from "./constants";

export function ReservationFlow({
  open,
  onOpenChange,
  selectedTime,
  people,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  selectedTime: string | null;
  people: number;
}) {
  // Modo "widget": abre o widget externo (Tagme) em um iframe.
  if (RESERVATION_MODE === "widget") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="max-w-lg overflow-hidden rounded-[4px] border-0 p-0"
          style={{ backgroundColor: "var(--papel)" }}
        >
          <DialogTitle asChild>
            <h2
              className="px-7 pt-7 font-display uppercase"
              style={{ color: "var(--espresso)", fontWeight: 800, fontSize: "28px" }}
            >
              Reservar mesa
            </h2>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Widget de reserva do Café 283
          </DialogDescription>
          <div className="p-4">
            <iframe
              title="Reserva Café 283"
              src={TAGME_WIDGET_URL}
              className="h-[560px] w-full rounded-[4px] border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Modo "form" (padrão): formulário próprio.
  return (
    <ReservationForm
      open={open}
      onOpenChange={onOpenChange}
      selectedTime={selectedTime}
      people={people}
    />
  );
}

function ReservationForm({
  open,
  onOpenChange,
  selectedTime,
  people,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  selectedTime: string | null;
  people: number;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [qty, setQty] = useState(people);
  const [time, setTime] = useState(selectedTime ?? "12:30");
  const [news, setNews] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setQty(people);
      setTime(selectedTime ?? "12:30");
      setDone(false);
    }
  }, [open, people, selectedTime]);

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderColor: "var(--oliva)",
    color: "var(--espresso)",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "13px",
    letterSpacing: "0.06em",
    color: "var(--oliva)",
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setDone(true);
  };

  const waMessage = `Pedido de reserva Café 283 — Dia dos Pais\nNome: ${name}\nHorário: ${time}\nPessoas: ${qty}\nData: DOM 09.08.2026`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-md rounded-[4px] border-0 p-0"
        style={{ backgroundColor: "var(--papel)" }}
      >
        {!done ? (
          <form onSubmit={submit} className="p-7">
            <DialogTitle asChild>
              <h2
                className="font-display uppercase"
                style={{ color: "var(--espresso)", fontWeight: 800, fontSize: "28px" }}
              >
                Reservar mesa
              </h2>
            </DialogTitle>
            <DialogDescription asChild>
              <p className="mt-1 font-mono uppercase" style={labelStyle}>
                Dom 09.08.2026 · Café 283
              </p>
            </DialogDescription>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="r-name" className="font-mono uppercase" style={labelStyle}>
                  Nome
                </label>
                <input
                  id="r-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1.5 w-full rounded-[4px] border px-3 py-2.5 font-body outline-none focus:border-petroleo"
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="r-phone" className="font-mono uppercase" style={labelStyle}>
                  WhatsApp
                </label>
                <input
                  id="r-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  inputMode="tel"
                  placeholder="(83) 9 9999-9999"
                  className="mt-1.5 w-full rounded-[4px] border px-3 py-2.5 font-body outline-none focus:border-petroleo"
                  style={inputStyle}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="r-qty" className="font-mono uppercase" style={labelStyle}>
                    Nº de pessoas
                  </label>
                  <input
                    id="r-qty"
                    type="number"
                    min={1}
                    max={20}
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="mt-1.5 w-full rounded-[4px] border px-3 py-2.5 font-mono outline-none focus:border-petroleo"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="r-time" className="font-mono uppercase" style={labelStyle}>
                    Horário
                  </label>
                  <select
                    id="r-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-1.5 w-full rounded-[4px] border px-3 py-2.5 font-mono outline-none focus:border-petroleo"
                    style={inputStyle}
                  >
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  checked={news}
                  onChange={(e) => setNews(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[var(--petroleo)]"
                />
                <span className="font-body" style={{ fontSize: "14px", color: "var(--espresso)" }}>
                  Quero receber as novidades do 283 no WhatsApp
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-[4px] px-4 py-3.5 font-mono uppercase transition-transform hover:scale-[1.01]"
              style={{
                backgroundColor: "var(--ambar)",
                color: "var(--espresso)",
                fontSize: "14px",
                letterSpacing: "0.06em",
              }}
            >
              Confirmar reserva
            </button>
          </form>
        ) : (
          <div className="p-7">
            <DialogTitle asChild>
              <h2
                className="font-display uppercase"
                style={{ color: "var(--espresso)", fontWeight: 800, fontSize: "28px", lineHeight: 1.05 }}
              >
                Pedido de reserva enviado.
              </h2>
            </DialogTitle>
            <DialogDescription asChild>
              <p className="mt-2 font-body" style={{ fontSize: "16px", color: "var(--espresso)" }}>
                A gente confirma no WhatsApp em até 2h.
              </p>
            </DialogDescription>

            <div
              className="mt-5 rounded-[4px] border border-dashed p-5 font-mono"
              style={{ borderColor: "var(--oliva)", fontSize: "13px", color: "var(--espresso)" }}
            >
              <p className="uppercase" style={{ color: "var(--oliva)" }}>
                Café 283 · Dia dos Pais
              </p>
              <div className="my-3 border-t border-dashed" style={{ borderColor: "var(--oliva)" }} />
              <p className="uppercase">Nome ......... {name || "—"}</p>
              <p className="uppercase">Horário ...... {time}</p>
              <p className="uppercase">Pessoas ...... {qty}</p>
              <p className="uppercase">Mesa ......... A confirmar</p>
              <div className="my-3 border-t border-dashed" style={{ borderColor: "var(--oliva)" }} />
              <p className="uppercase" style={{ color: "var(--oliva)" }}>
                Dom 09.08.2026 · 09h–15h
              </p>
            </div>

            <a
              href={MAPS_DIR_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-[4px] border px-4 py-3 font-mono uppercase transition-colors hover:bg-petroleo hover:text-papel"
              style={{
                borderColor: "var(--petroleo)",
                color: "var(--petroleo)",
                fontSize: "13px",
                letterSpacing: "0.06em",
              }}
            >
              <Navigation size={16} /> Obter rota
            </a>

            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-[4px] px-4 py-3.5 font-mono uppercase transition-transform hover:scale-[1.01]"
              style={{
                backgroundColor: "var(--petroleo)",
                color: "var(--papel)",
                fontSize: "14px",
                letterSpacing: "0.06em",
              }}
            >
              <MessageCircle size={18} /> Abrir no WhatsApp
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
