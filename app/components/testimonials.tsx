// Trustindex Testimonials Component
import React, { useEffect } from 'react';
import { useTheme } from '../../src/contexts/theme-context';

const Testimonials = () => {
  const { theme } = useTheme();
  useEffect(() => {
    // Optional: Add any additional initialization if needed
  }, []);

  return (
    <section className="py-15 bg-[#F5F5F5] dark:bg-(--dclr1)">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="text-center text-(--clr4) dark:text-(--clr2) text-3xl font-bold mb-10">Lo que dicen de nosotros</h2>

        <div
          className="flex justify-center"
          style={{
              filter: theme === 'dark' ? 'invert(90%)' : 'none',
            }}
        >
          <iframe className='taggbox overflow-auto h-[420px] max-w-[1024px]' src="https://widget.taggbox.com/307862?website=1" ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;