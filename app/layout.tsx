import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JGTS Imobiliária",
  description:
    "A JGTS Imobiliária é uma empresa especializada em aluguel de imóveis, oferecendo uma ampla variedade de opções para atender às necessidades dos nossos clientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
