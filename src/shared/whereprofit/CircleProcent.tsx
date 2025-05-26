'use client';

import React, { useState } from 'react';

type Segment = {
    value: number;
    color: string;
};

const data: Segment[] = [
    { value: 20, color: '#FF6B6B' },
    { value: 20, color: '#FFD93D' },
    { value: 20, color: '#6BCB77' },
    { value: 20, color: '#4D96FF' },
    { value: 20, color: '#9D4EDD' },
];

const ArcChart: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    const radius = 60;
    const thickness = 20;
    const center = 100;
    const total = data.length;

    const toRadians = (deg: number) => (deg * Math.PI) / 180;

    const createArcPath = (index: number, hover: boolean = false): string => {
        const anglePerSegment = 360 / total;
        const startAngle = index * anglePerSegment;
        const endAngle = startAngle + anglePerSegment;

        const outerR = radius + (hover ? 10 : 0);
        const innerR = outerR - thickness;

        const startOuter = {
            x: center + outerR * Math.cos(toRadians(startAngle)),
            y: center + outerR * Math.sin(toRadians(startAngle)),
        };

        const endOuter = {
            x: center + outerR * Math.cos(toRadians(endAngle)),
            y: center + outerR * Math.sin(toRadians(endAngle)),
        };

        const startInner = {
            x: center + innerR * Math.cos(toRadians(endAngle)),
            y: center + innerR * Math.sin(toRadians(endAngle)),
        };

        const endInner = {
            x: center + innerR * Math.cos(toRadians(startAngle)),
            y: center + innerR * Math.sin(toRadians(startAngle)),
        };

        const largeArcFlag = anglePerSegment > 180 ? 1 : 0;

        return `
      M ${startOuter.x},${startOuter.y}
      A ${outerR},${outerR} 0 ${largeArcFlag} 1 ${endOuter.x},${endOuter.y}
      L ${startInner.x},${startInner.y}
      A ${innerR},${innerR} 0 ${largeArcFlag} 0 ${endInner.x},${endInner.y}
      Z
    `;
    };

    return (
        <svg width={200} height={200} viewBox="0 0 200 200">
            {data.map((seg, i) => (
                <path
                    key={i}
                    d={createArcPath(i, hovered === i)}
                    fill={seg.color}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ transition: 'all 0.3s ease' }}
                />
            ))}

            {hovered !== null && (
                <text x={100} y={100} textAnchor="middle" dominantBaseline="middle" fontSize={16} fill="#222">
                    {data[hovered].value}%
                </text>
            )}
        </svg>
    );
};

export default ArcChart;
