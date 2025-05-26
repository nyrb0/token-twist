'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IIconsSide {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const IconsSide = ({ position }: IIconsSide) => {
    const svgRef = useRef(null);
    const isInView = useInView(svgRef, {
        once: true,
        amount: 0.8,
    });

    const svgMap = {
        'bottom-left': <path d="M77.6253 0H0V909H200L77.6253 0Z" fill="black" />,
        'bottom-right': <path d="M122.375 0H200V909H0L122.375 0Z" fill="black" />,
        'top-right': <path d="M122.375 1088H200V0H0L122.375 1088Z" fill="black" />,
        'top-left': <path d="M77.6253 1088H0V0H200L77.6253 1088Z" fill="black" />,
    };
    return (
        <motion.svg
            ref={svgRef}
            width="200"
            height="1088"
            viewBox="0 0 200 1088"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
        >
            {svgMap[position]}
        </motion.svg>
    );
};

export default IconsSide;
