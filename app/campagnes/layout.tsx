import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campagnes | ASSION",
  description: "Découvrez les principaux domaines d'intervention d'ASSION et soutenez les actions de solidarité menées auprès des orphelins, des veuves et des personnes en situation de vulnérabilité.",
};

export default function CampaignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
