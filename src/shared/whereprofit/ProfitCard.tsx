import { HtmlHTMLAttributes, ReactNode } from 'react';
import styles from './WhereProfit.module.scss';

interface IProfitCard extends HtmlHTMLAttributes<HTMLElement> {
    children: ReactNode;
    color: string;
    isActive: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}
const ProfitCard = ({ children, color, isActive, onMouseEnter, onMouseLeave, ...props }: IProfitCard) => {
    return (
        <div
            {...props}
            className={`${styles.card} ${isActive && styles.isActive}`}
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
