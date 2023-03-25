import React from 'react';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });
type Props = {};

const Esummit23 = (props: Props) => {
  const handlePointerMove = (e) => {
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX', x - l - w / 2);
    el.style.setProperty('--posY', y - t - h / 2);
  };

  return (
    <main className="bg-dark">
      <section
        onPointerMove={handlePointerMove}
        className="h-screen relative gradientBackground"
      >
        <div className="bg-gradient-to-r flex from-black to-transparent h-screen w-full z-10 absolute top-0 left-0">
          <div
            style={montserrat.style}
            className="flex justify-center items-center w-1/2 flex-col"
          >
            <div className="space-y-12 w-3/4">
              <div className="">
                <span className="text-2xl uppercase text-white font-medium">
                  INTRODUCING
                </span>
                <h1 className="text-7xl uppercase text-white font-bold">
                  Esummit&apos;23
                </h1>
              </div>

              <p className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, dolores expedita consequuntur esse nemo odio natus
                dolore cumque sunt debitis aliquam reiciendis saepe?
                Perspiciatis quae esse quod, asperiores sapiente pariatur?
              </p>

              <button className="bg-gradient-to-r uppercase font-semibold shadow-lg from-orange-500 to-red-600 px-16 py-4 rounded-full">
                Register Now
              </button>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </section>
    </main>
  );
};

export default Esummit23;
