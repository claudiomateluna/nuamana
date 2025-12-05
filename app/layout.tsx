import type { Metadata } from "next";
import { Inika, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Footer from './components/footer';
import { ThemeProvider } from '../src/contexts/theme-context';

const inika = Inika({
  variable: "--font-inika",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Guías y Scouts Nua Mana",
  description: "Una nueva aventura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA specific tags */}
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Nua Mana" />
        <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body
        className={`${inika.variable} ${robotoSlab.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      <Footer />

        {/* Register service worker */}
        <script
          id="register-sw"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' })
                    .then(function(registration) {
                      console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch(function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    });
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
