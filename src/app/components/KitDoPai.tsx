import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./constants";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import prato0 from "../../imports/image.png";
import prato1 from "../../imports/image-1.png";
import prato2 from "../../imports/image-2.png";
import prato3 from "../../imports/image-3.png";
import prato4 from "../../imports/image-4.png";
import prato5 from "../../imports/image-5.png";

const PRATOS = [
  { src: prato0, alt: "Salada colorida com legumes e frango" },
  { src: prato1, alt: "Croissant folhado com calda de doce de leite" },
  { src: prato2, alt: "Sanduíche tostado com queijo e bacon" },
  { src: prato3, alt: "Tapioca recheada servida com café" },
  { src: prato4, alt: "Fatia de torta de limão com merengue" },
  { src: prato5, alt: "Sobremesa de doce de leite com sorvete" },
];

export function KitDoPai() {
  return (
    <section id="kit" className="mx-auto max-w-[1120px] px-5 py-16 md:px-12 md:py-28">
      <div
        className="grid gap-8 rounded-[4px] p-8 md:grid-cols-[1.4fr_1fr] md:items-center md:p-12"
        style={{ backgroundColor: "var(--petroleo)" }}
      >
        <div>
          <p
            className="font-mono uppercase"
            style={{ fontSize: "13px", letterSpacing: "0.06em", color: "var(--ambar)" }}
          >
            Pré-venda
          </p>
          <h2
            className="mt-3 font-display uppercase"
            style={{ color: "var(--papel)", fontWeight: 800, fontSize: "clamp(28px, 5vw, 44px)" }}
          >
            O Kit do Pai
          </h2>
          <p
            className="mt-4 max-w-md font-body"
            style={{ color: "var(--papel)", fontSize: "18px", lineHeight: 1.6 }}
          >
            Para quem não vai sair de casa: café, doce e o que o 283 faz de melhor, em uma
            caixa. Retirada no dia 09/08 ou entrega em João Pessoa.
          </p>
          <p
            className="mt-5 font-mono uppercase"
            style={{ fontSize: "13px", letterSpacing: "0.04em", color: "var(--ambar)" }}
          >
            Produção limitada · pedidos até 07/08
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 md:items-end">
          <p
            className="font-mono"
            style={{ color: "var(--papel)", fontSize: "48px", lineHeight: 1 }}
          >
            R$ 149<span style={{ fontSize: "24px" }}>,00</span>
          </p>
          <a
            href={whatsappLink("Quero comprar o Kit do Pai do Café 283 (pré-venda).")}
            target="_blank"
            rel="noreferrer"
            className="rounded-[4px] px-6 py-3.5 font-mono uppercase transition-transform hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--ambar)",
              color: "var(--espresso)",
              fontSize: "14px",
              letterSpacing: "0.06em",
            }}
          >
            Comprar agora
          </a>
          <a
            href={whatsappLink("Tenho uma dúvida sobre o Kit do Pai do Café 283.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-body underline underline-offset-4 transition-opacity hover:opacity-70"
            style={{ color: "var(--papel)", fontSize: "14px" }}
          >
            <MessageCircle size={15} /> Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* O que vem na caixa — carrossel dos pratos */}
      <div className="mt-10">
        <p
          className="font-mono uppercase"
          style={{ fontSize: "13px", letterSpacing: "0.06em", color: "var(--oliva)" }}
        >
          O que vem na caixa
        </p>

        <Carousel opts={{ align: "start", loop: true }} className="mt-5">
          <CarouselContent className="-ml-3">
            {PRATOS.map((prato) => (
              <CarouselItem key={prato.alt} className="basis-1/2 pl-3 md:basis-1/3">
                <div className="aspect-square overflow-hidden rounded-[4px]">
                  <ImageWithFallback
                    src={prato.src}
                    alt={prato.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <p
          className="mt-4 font-body"
          style={{ fontSize: "13px", color: "var(--oliva)" }}
        >
          Itens ilustrativos — conteúdo final a definir. Entrega em João Pessoa, pedidos até 07/08.
        </p>
      </div>
    </section>
  );
}
