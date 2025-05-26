import { useState, useEffect } from 'react';

export function AnimatedPercentage({ target = 100, duration = 2000 }) {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const steps = 120; // количество обновлений (кадров)
        const increment = target / steps;
        const interval = duration / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            setPercent(Math.floor(current));
        }, interval);

        return () => clearInterval(timer);
    }, [target, duration]);

    return <>{percent}%</>;
}
