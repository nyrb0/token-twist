import { useState } from 'react';

export const useHoveredBar = () => {
    const [hovered, setHovered] = useState<{
        index: number;
        key: string;
        x: number;
        y: number;
    } | null>(null);

    const onMouseEnter = (index: number, key: string) => (e: React.MouseEvent) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        setHovered({
            index,
            key,
            x: rect.left + rect.width / 2,
            y: e.clientY,
        });
    };

    const onMouseLeave = () => setHovered(null);

    return { hovered, onMouseEnter, onMouseLeave };
};
