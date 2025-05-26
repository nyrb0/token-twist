import { ReactNode } from 'react';
import styles from './WhereProfit.module.scss';

interface IProfitCard {
    children: ReactNode;
    color: string;
    isActive: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}
const ProfitCard = ({ children, color, isActive, onMouseEnter, onMouseLeave }: IProfitCard) => {
    return (
        <div
            className={styles.card}
            style={{
                backgroundColor: isActive ? color : 'white',
                border: `2px solid ${color}`,
                ['--title-color' as any]: color,
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    );
};

export default ProfitCard;
