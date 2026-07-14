import { useEffect, useState } from "react";
import { EVENT_DATE } from "./constants";

function diff() {
  const now = new Date().getTime();
  const total = EVENT_DATE.getTime() - now;
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((total / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((total / 1000) % 60));
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [t, setT] = useState(diff());

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <p
      className="font-mono uppercase text-alerta"
      style={{ fontSize: "13px", letterSpacing: "0.06em" }}
    >
      Faltam {t.days} dias · {pad(t.hours)}:{pad(t.minutes)}:{pad(t.seconds)} · 09.08.2026
    </p>
  );
}
