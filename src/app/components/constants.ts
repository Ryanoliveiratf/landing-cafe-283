export const EVENT_DATE = new Date("2026-08-09T09:00:00-03:00");
export const EVENT_LABEL = "DOM 09.08.2026";

// Horários de reserva — todos selecionáveis. A disponibilidade real
// é confirmada na próxima etapa (widget/CRM), não no front.
export const TIME_SLOTS = ["09:00", "11:00", "12:30", "14:00", "15:00"];

// Número de WhatsApp do Café 283 (formato internacional, só dígitos).
export const WHATSAPP_NUMBER = "5583981111406";
// Versão formatada para exibição.
export const PHONE_DISPLAY = "(83) 98111-1406";
// Instagram
export const INSTAGRAM_HANDLE = "cafe283";
export const INSTAGRAM_URL = "https://instagram.com/cafe283";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ── Localização ────────────────────────────────────────────────
// Endereço exibido — ajustar o texto se necessário.
export const ADDRESS = "Manaíra, João Pessoa - PB";
// Rota apontando para o ponto real do café (coordenadas do Google Maps).
export const MAPS_DIR_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-7.1114900928920415,-34.83167682500174&destination_place_id=ChIJcQ0aM9PSrAcRO2TpiyLfsZ8";

// ── Fluxo de reserva ───────────────────────────────────────────
// "form"   -> formulário próprio (padrão atual)
// "widget" -> abre o widget externo (Tagme) em um iframe
export type ReservationMode = "form" | "widget";
export const RESERVATION_MODE: ReservationMode = "form";

// URL do widget da Tagme (preencher quando disponível).
export const TAGME_WIDGET_URL = "https://widget.tagme.com.br/YOUR_RESTAURANT_ID";
