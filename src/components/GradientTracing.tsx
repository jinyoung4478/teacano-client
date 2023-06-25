import { motion } from 'framer-motion';

interface IGradientTracingProps {
   width: number;
   height: number;
   path: string;
}

export function GradientTracing1({ width, height, path }: IGradientTracingProps) {
   return (
      <div className="absolute bottom-0 left-[83px]">
         <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
            <path d={path} stroke="url(#pulse-1)" strokeLinecap="round" strokeWidth="2" />
            <defs>
               <motion.linearGradient
                  animate={{
                     x1: [0, width * 2],
                     x2: [0, width],
                     y1: [height, height / 2],
                     y2: [height * 2, height],
                  }}
                  transition={{
                     duration: 4,
                     repeat: Infinity,
                  }}
                  id="pulse-1"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2EB9DF" stopOpacity="0" />
                  <stop stopColor="#2EB9DF" />
                  <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />
               </motion.linearGradient>
            </defs>
         </svg>
      </div>
   );
}
