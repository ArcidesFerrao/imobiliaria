import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JGTS Imobiliária",
  description: "A JGTS Imobiliária é uma empresa especializada em aluguel de imóveis, oferecendo uma ampla variedade de opções para atender às necessidades dos nossos clientes. Com um compromisso com a excelência e a satisfação do cliente, a JGTS Imobiliária se destaca no mercado imobiliário, proporcionando experiências excepcionais para locatários e proprietários. Nossa equipe dedicada trabalha incansavelmente para garantir que cada transação seja transparente, eficiente e satisfatória, tornando a JGTS Imobiliária a escolha ideal para quem busca um serviço de aluguel confiável e de alta qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
