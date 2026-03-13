'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  
  // Section 1: 0% to 20%
  const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.2], [0, -100]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.3, 0.5], [100, 0, -100]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.6, 0.8], [100, 0, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center">
      
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-md">
          Bhaskar Naik Mudavath
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 font-medium drop-shadow-sm">
          Full Stack Developer
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-[10%] md:px-[20%]"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white max-w-2xl drop-shadow-md">
          I build scalable enterprise applications.
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 max-w-xl font-medium drop-shadow-sm">
          Architecting microservices in Spring Boot, Angular, and moder cloud infrastructures.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-[10%] md:px-[20%]"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white max-w-2xl drop-shadow-md">
          Bridging robust engineering <br/> with seamless experiences.
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 max-w-xl ml-auto font-medium drop-shadow-sm">
          Driven by performance, security, and scalable data pipelines.
        </p>
      </motion.div>

    </div>
  );
}
