import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio de Nadia Di Rosso Bakrim",
  description: "Bienvenue dans mon portfolio Développeuse web full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
        {children}
      </body>
    </html>
  );
}
