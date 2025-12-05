'use client';

import * as React from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Componente Card
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border text-card-foreground shadow-lg bg-white',
        className
      )}
      {...props}
    />
  );
});
Card.displayName = 'Card';

// Componente CardHeader
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  );
});
CardHeader.displayName = 'CardHeader';

// Componente CardTitle
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-bold leading-none tracking-tight text-[#2c3e50]',
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = 'CardTitle';

// Componente CardContent
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  );
});
CardContent.displayName = 'CardContent';

// Componente principal FeaturesSection
const FeaturesSection = () => {
  const features = [
    {
      title: "LOGRAMOS",
      description: "Empoderamiento Juvenil",
      image: "/images/inicio/pag_Logramos.jpg",
      link: "/lo-que-hacemos/sistema-de-equipos"
    },
    {
      title: "CREAMOS",
      description: "Ciudadan@s Activ@s",
      image: "/images/inicio/pag_Creamos.jpg",
      link: "/lo-que-hacemos/programa-y-actividades"
    },
    {
      title: "CULTIVAMOS",
      description: "Valores y Habilidades",
      image: "/images/inicio/pag_Cultivamos.jpg",
      link: "/lo-que-hacemos/habilidades-y-tecnicas"
    },
    {
      title: "ABRAZAMOS",
      description: "Educación para la Paz",
      image: "/images/inicio/pag_Abrazamos.jpg",
      link: "/lo-que-hacemos/aprender-haciendo"
    }
  ];

  return (
    <section className="py-20 bg-(--clr1) text-(--clr6) dark:bg-(--clr4) dark:text-(--dclr8)">
      <div className="max-w-[1080px] container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">¿Qué hacemos?</h2>
        <p className="text-center text-xl text-(--clr5) dark:text-(--clr2) mb-16 max-w-3xl mx-auto">Descubre las actividades que realizamos en Nua Mana para el desarrollo integral de las niñas, niños y jóvenes</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((item, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Imagen de fondo */}
              <div 
                className="w-full h-68 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              
              {/* Overlay oscuro para mejor contraste del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-(--clr4)/90 to-transparent"></div>
              
              {/* Contenido de la tarjeta */}
              <a 
                href={item.link} 
                className="absolute inset-0 z-1 flex flex-col items-center justify-end pb-8 text-center"
              >
                <h3 className="text-2xl font-bold text-(--clr8) dark:text-(--dclr6)">{item.title}</h3>
                <p className="mt-2 text-(--clr1) dark:text-(--clr2)">{item.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;