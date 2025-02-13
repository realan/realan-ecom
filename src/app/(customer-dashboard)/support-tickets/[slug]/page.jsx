import { notFound } from "next/navigation";
import { TicketDetailsPageView } from "pages-sections/customer-dashboard/support-tickets/page-view";

// API FUNCTIONS
import api from "utils/__api__/ticket";

// CUSTOM DATA MODEL

export async function generateMetadata({
  params
}) {
  const {
    slug
  } = await params;
  const ticket = await api.getTicket(slug);
  return {
    title: ticket.title + " - Bazaar Next.js E-commerce Template",
    description: "Bazaar is a React Next.js E-commerce template.",
    authors: [{
      name: "UI-LIB",
      url: "https://ui-lib.com"
    }],
    keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
  };
}
export default async function SupportTicketDetails({
  params
}) {
  const {
    slug
  } = await params;
  const ticket = await api.getTicket(slug);
  if (!ticket) notFound();
  return <TicketDetailsPageView ticket={ticket} />;
}