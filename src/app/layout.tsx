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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Asap&family=Great+Vibes&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Ubuntu:ital@0;1&display=swap" rel="stylesheet"></link>
            <body>
        {children}
      </body>
    </html>
  );
}
