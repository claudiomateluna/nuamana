'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Header from './components/Header';
import Hero from './components/hero';
import FAQ from './components/faq';
import Testimonios from './components/testimonials';
import Visitanos from './components/visit-section';
import FeaturesSection from './components/features-section';

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if PWA is installed
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);

    // Check if on iOS
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      console.log('Installation prompt deferred');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult: any) => {
        console.log(choiceResult.outcome);
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <>
      <Header />
      <Hero />
      <div className="flex min-h-screen items-center justify-center">
        <main className="mx-auto w-full">

        {/* Features Section */}
        <FeaturesSection />

        {/* Testimonials */}
        <Testimonios />

        {/* Visit Section */}
        <Visitanos />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-(--clr1) dark:from-(--clr4) from-20% dark:from-40% to-(--clr6)/40 dark:to-(--dclr7) text-(--clr1) dark:text-(--dclr2)">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-(--clr5) dark:from-(--clr7) to-(--clr7) dark:to-(--clr6) bg-clip-text font-extrabold text-transparent">¿Listo para comenzar tu aventura?</h2>
            <p className="text-2xl mb-10 max-w-3xl mx-auto text-(--clr2) dark:text-(--dclr8)">
              Únete a la comunidad guía y scout más grande y <br />comienza tu camino de crecimiento personal
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => router.push('/auth/signup')}
                className="text-(--clr5) hover:text-(--clr7) dark:hover:text-(--dclr2) bg-(--clr6) hover:bg-(--clr5) dark:bg-(--dclr8) dark:hover:bg-(--dclr6) px-4 py-2 rounded-[2em] font-semibold transition-colors duration-300"
              >
                ¡Únete Ahora!
              </button>
              <button
                onClick={() => router.push('/auth/signin')}
                className="text-(--clr5) hover:text-(--clr5) dark:text-(--dclr2) border-2 border-(--clr5) hover:border-(--clr1) dark:hover:border-(--dclr2) dark:border-(--dclr2) hover:bg-(--clr1) dark:hover:bg-(--dclr2) px-4 py-2 rounded-[2em]"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </section>
      </main> {/* Close the main container */}
      </div>
    </>
  );
}
