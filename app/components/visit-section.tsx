'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../../src/contexts/theme-context';
import { IconoRRSSEmail, IconoMapPin } from './ui/iconos'

const VisitSection = () => {
  const [years, setYears] = useState(0);
  const [isMailHovered, setIsMailHovered] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  // Calcular años desde la fundación (23 de septiembre de 2005)
  useEffect(() => {
    const foundationDate = new Date(2005, 8, 23); // Mes 8 = septiembre (0-indexed)
    const today = new Date();

    let yearsDiff = today.getFullYear() - foundationDate.getFullYear();
    const monthDiff = today.getMonth() - foundationDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < foundationDate.getDate())) {
      yearsDiff--;
    }

    // Animación del contador de años
    const duration = 2000; // 2 segundos
    const increment = yearsDiff / (duration / 16); // Aproximadamente 60 fps
    let current = 0;

    // Función para reiniciar la animación
    const startAnimation = () => {
      current = 0;
      setYears(0); // Reiniciar a 0

      const timer = setInterval(() => {
        current += increment;
        if (current >= yearsDiff) {
          setYears(yearsDiff);
          clearInterval(timer);
        } else {
          setYears(Math.floor(current));
        }
      }, 16);

      return timer;
    };

    // Iniciar la primera animación
    let timer = startAnimation();

    // Configurar intervalo para reiniciar cada 30 segundos
    const resetInterval = setInterval(() => {
      clearInterval(timer);
      timer = startAnimation();
    }, 30000); // 30 segundos

    return () => {
      clearInterval(timer);
      clearInterval(resetInterval);
    };
  }, []);

  // Marcar como cliente después del montaje
  useEffect(() => {
    setIsClient(true);
    // Actualizar tiempo cada segundo para el reloj analógico
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-(--clr1) dark:bg-(--clr4) text-(--clr6) dark:text-(--dclr8)">
      <div className="max-w-[1024px] mx-auto py-15">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">¡Únete Ahora!</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Columna izquierda (30%) */}
        <div className="w-full md:w-3/10 space-y-6">
          {/* Subsección A */}
          <div className="flex">
            {/* Columna A1 */}
            <div className="w-1/2 bg-gradient-to-br from-(--clr6) dark:from-(--dclr6) from-10% to-(--clr5) to-50% p-4 rounded-l-lg shadow-lg flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-(--clr1) dark:text-(--dclr8)">+{years}</div>
              <div className="text-center text-(--clr1) dark:text-(--dclr2) text-sm leading-none animate-bounce">Años de Experiencias</div>
            </div>

            {/* Columna A2 */}
            <div className="w-1/2 bg-gradient-to-br from-(--clr5) from-40% to-(--clr7) dark:to-(--dclr7) to-80% rounded-r-lg shadow-lg flex flex-col items-center justify-center">
              <a
                href="mailto:contacto@nuamana.cl"
                className={`p-1 rounded-full transition-all duration-300 ${isMailHovered ? 'bg-(--clr8) dark:bg-(--dclr8) scale-110' : 'bg-transparent'}`}
                onMouseEnter={() => setIsMailHovered(true)}
                onMouseLeave={() => setIsMailHovered(false)}
              >
                <IconoRRSSEmail className={`w-8 h-8 ${isMailHovered ? 'text-(--clr5)' : 'text-(--clr1) dark:text-(--dclr2)'}`} />
              </a>
              <div className="text-center">
                <a
                  href="mailto:contacto@nuamana.cl"
                  className="text-(--clr1) dark:text-(--dclr2) hover:text-(--clr8) dark:hover:text-(--dclr8) text-sm"
                >
                  <div className="mb-[-5px]">contacto</div>
                  <div className="mt-[-5px]">@nuamana.cl</div>
                </a>
              </div>
            </div>
          </div>

          {/* Subsección B */}
          <div className="rounded-full flex flex-col items-center overflow-hidden rounded-lg">
            <div className="rounded-full w-50 h-50 flex flex-col items-center bg-gradient-to-r from-[var(--clr8)] to-[var(--clr6)] opacity-90">
              <div className="relative p-6 text-center bg-[url(/images/inicio/AndysShow.png)] bg-contain bg-center bg-no-repeat flex items-center justify-center h-50">
                <div className="text-xl font-bold text-(--clr1) dark:text-gray-200 leading-none">VEN A VISITARNOS</div>
              </div>
            </div>
          </div>

          {/* Subsección C */}
          <div className="flex">
            {/* Columna C1 */}
            <div className="w-1/2 bg-gradient-to-br from-(--clr8) dark:from-(--dclr8) from-10% to-(--clr6) dark:to-(--dclr6) to-50% p-2 rounded-l-lg flex flex-col items-center">
              <div className="relative w-16 h-16">
                {/* Contenedor del círculo */}
                <div className="absolute animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full border-4 border-(--clr5) dark:border-(--dclr2)"></div>
                </div>

                {/* Contenedor central para rotar las manecillas */}
                {isClient && (
                  <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Horario */}
                    <div
                      className="absolute top-1/2 left-0 -translate-y-1/2 origin-left bg-(--clr5) dark:bg-(--dclr2)"
                      style={{
                        width: '0.9rem', /* 1.5rem * 0.45 */
                        height: '0.125rem', /* 2/16 */
                        transform: `rotate(${(time.getHours() % 12) * 30 + time.getMinutes() * 0.5}deg)`
                      }}
                    ></div>
                    {/* Minutero */}
                    <div
                      className="absolute top-1/2 left-0 -translate-y-1/2 origin-left bg-(--clr5) dark:bg-(--dclr2)"
                      style={{
                        width: '1.125rem', /* 2.5rem * 0.45 */
                        height: '0.125rem', /* 2/16 */
                        transform: `rotate(${time.getMinutes() * 6}deg)`
                      }}
                    ></div>
                    {/* Segundero */}
                    <div
                      className="absolute top-1/2 left-0 -translate-y-1/2 origin-left bg-(--clr7) dark:bg-(--dclr7)"
                      style={{
                        width: '1.20rem', /* 3rem * 0.45 */
                        height: '0.125rem', /* 2/16 */
                        transform: `rotate(${time.getSeconds() * 6}deg)`
                      }}
                    ></div>
                  </div>
                )}

                {/* Centro del reloj */}
                <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-(--clr5) dark:bg-(--dclr2) rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
              </div>
              <div className="text-center font-bold text-sm text-(--clr5) dark:text-(--dclr2) animate-pulse">
                <div className="mb-[-5px]">Sábados de 3 a 6</div>
                <div className="mt-[-5px]">De la Tarde</div>
              </div>
            </div>

            {/* Columna C2 */}
            <div className="w-1/2 bg-gradient-to-br from-(--clr6) dark:from-(--dclr6) from-40% to-(--clr5) to-80% p-2 rounded-r-lg flex flex-col items-center">
              <div className="relative w-16 h-16">
                <IconoMapPin className="w-full h-full text-(--clr1) dark:text-(--dclr2)" />
                <div className="absolute inset-0 rounded-full border-2 border-(--clr5) animate-ping opacity-20"></div>
              </div>
              <div className="text-center text-sm text-(--clr1) dark:text-(--dclr2)">
                <div className="mb-[-5px]">Bahía Catalina</div>
                <div className="mt-[-5px]">11781, La Florida</div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha (70%) con mapa */}
        <div className="w-full md:w-7/10">
          <div
            className="rounded-lg overflow-hidden shadow-xl h-full"
            style={{
              filter: theme === 'dark' ? 'invert(90%)' : 'none',
              border: theme === 'dark' ? '8px solid #D585CC' : '8px solid var(--clr6)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.382796811922!2d-70.6096195!3d-33.569409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0a6e457520d%3A0xc3892aa7fa7d74b!2sGuias%20y%20Scouts%20Nua%20Mana!5e0!3m2!1ses!2scl!4v1763411447730!5m2!1ses!2scl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default VisitSection;