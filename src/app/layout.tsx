import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Zaak Montagens - Montador de Móveis Profissional',
  description: 'Montagem e desmontagem de móveis com agilidade, experiência e perfeição em residências e empresas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap" rel="stylesheet" />
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-10902335859"></Script>
        <Script id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10902335859');
          `}
        </Script>
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
