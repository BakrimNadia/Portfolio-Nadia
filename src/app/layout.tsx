import type { Metadata } from "next";
import { Provider } from "../components/ui/provider";

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
        <Provider />
        {children}
       <Provider />
      </body>
    </html>
  );
}
