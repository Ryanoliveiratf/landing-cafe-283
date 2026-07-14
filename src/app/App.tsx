import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AmbienteBand } from "./components/AmbienteBand";
import { Diferenciais } from "./components/Diferenciais";
import { Horarios } from "./components/Horarios";
import { HorariosDoDia } from "./components/HorariosDoDia";
import { Comanda } from "./components/Comanda";
import { KitDoPai } from "./components/KitDoPai";
import { ProvaSocial } from "./components/ProvaSocial";
import { ComoChegar } from "./components/ComoChegar";
import { GrupoVIP, Footer } from "./components/GrupoVIP";
import { ReservationFlow } from "./components/ReservationFlow";

export default function App() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [people, setPeople] = useState(4);
  const [modalOpen, setModalOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const scrollToHorarios = () => {
    document.getElementById("horarios")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToKit = () => {
    document.getElementById("kit")?.scrollIntoView({ behavior: "smooth" });
  };

  const openReserva = () => setModalOpen(true);

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "var(--papel)", fontFamily: "var(--font-body)" }}>
      <Header onReserve={scrollToHorarios} />

      <main className="mx-auto max-w-[1120px] px-5 md:px-12">
        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-12">
          <div className="min-w-0">
            <Hero onReserve={scrollToHorarios} onKit={scrollToKit} />
          </div>

          {/* Comanda sticky — desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 pt-36">
              <Comanda
                selectedTime={selectedTime}
                people={people}
                onConfirm={openReserva}
              />
            </div>
          </aside>
        </div>
      </main>

      <AmbienteBand />

      <Diferenciais />

      <Horarios
        selectedTime={selectedTime}
        onSelect={setSelectedTime}
        people={people}
        setPeople={setPeople}
        onReserve={openReserva}
      />

      <HorariosDoDia />

      <KitDoPai />
      <ProvaSocial />
      <ComoChegar />
      <GrupoVIP />
      <Footer />

      {/* Comanda bottom-sheet — mobile (único momento animado) */}
      <AnimatePresence>
        {selectedTime && (
          <motion.div
            key="comanda-sheet"
            initial={reduceMotion ? { opacity: 0 } : { y: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { y: "100%" }}
            transition={reduceMotion ? { duration: 0.15 } : { type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
          >
            <Comanda
              selectedTime={selectedTime}
              people={people}
              onConfirm={openReserva}
              compact
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ReservationFlow
        open={modalOpen}
        onOpenChange={setModalOpen}
        selectedTime={selectedTime}
        people={people}
      />
    </div>
  );
}
