import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://site-credmais.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Credmais | Crédito Consignado e Empréstimo Pessoal",
  description:
    "Aprovação rápida, taxas reduzidas e dinheiro na conta em poucas horas. Simule seu crédito consignado com a Credmais.",
  icons: {
    icon: "/assets/logo/logo.png",
    shortcut: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png",
  },
  openGraph: {
    title: "Credmais | Crédito Consignado e Empréstimo Pessoal",
    description:
      "Aprovação rápida, taxas reduzidas e dinheiro na conta em poucas horas. Simule seu crédito consignado com a Credmais.",
    url: siteUrl,
    siteName: "Credmais",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Credmais - Crédito Consignado e Empréstimo Pessoal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credmais | Crédito Consignado e Empréstimo Pessoal",
    description:
      "Aprovação rápida, taxas reduzidas e dinheiro na conta em poucas horas.",
    images: ["/assets/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              history.scrollRestoration = 'manual';
              if (location.hash) {
                history.replaceState(null, '', location.pathname + location.search);
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body className={montserrat.variable}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
