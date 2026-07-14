import { Coffee, Gift, Armchair } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import galeria0 from "../../imports/image.png";
import galeria1 from "../../imports/image-1.png";
import galeria2 from "../../imports/image-2.png";
import galeria3 from "../../imports/image-3.png";
import galeria4 from "../../imports/image-4.png";
import galeria5 from "../../imports/image-5.png";

const BLOCOS = [
  {
    icon: Coffee,
    title: "Menu especial do dia",
    text: "Um menu montado só para o domingo 09/08 — servido das 9h às 15h.",
  },
  {
    icon: Gift,
    title: "Brinde para o pai",
    text: "Todo pai na mesa leva um brinde do 283.",
  },
  {
    icon: Armchair,
    title: "A casa toda dele",
    text: "Café coado na hora, ambiente aberto e mesa reservada no seu nome.",
  },
];

const GALERIA = [
  { src: galeria0, alt: "Salada colorida com legumes e frango do Café 283" },
  { src: galeria1, alt: "Croissant folhado com calda de doce de leite" },
  { src: galeria2, alt: "Sanduíche tostado no pão de forma com queijo e bacon" },
  { src: galeria3, alt: "Tapioca recheada servida com café" },
  { src: galeria4, alt: "Fatia de torta de limão com merengue" },
  { src: galeria5, alt: "Sobremesa de doce de leite com sorvete e farofa crocante" },
];

export function Diferenciais() {
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
        O que tem no dia
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {BLOCOS.map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <Icon size={28} strokeWidth={1.25} color="var(--oliva)" />
            <h3
              className="mt-4 font-display uppercase"
              style={{ color: "var(--espresso)", fontWeight: 700, fontSize: "20px" }}
            >
              {title}
            </h3>
            <p
              className="mt-2 font-body"
              style={{ color: "var(--espresso)", fontSize: "16px", lineHeight: 1.6 }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
        {GALERIA.map((foto) => (
          <div key={foto.alt} className="aspect-square overflow-hidden rounded-[4px]">
            <ImageWithFallback
              src={foto.src}
              alt={foto.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      
    </section>
  );
}
