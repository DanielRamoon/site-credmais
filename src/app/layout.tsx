import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Credmais | Crédito Consignado e Empréstimo Pessoal",
  description:
    "Aprovação rápida, taxas reduzidas e dinheiro na conta em poucas horas. Simule seu crédito consignado com a Credmais.",
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
