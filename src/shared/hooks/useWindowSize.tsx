import { useEffect, useState } from 'react';

export const useWindowSize = () => {
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        setWidth(window.innerWidth);

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};
