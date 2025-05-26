import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'white' | 'purble';

    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
    const variants = () => {
        if (variant === 'white') return styles.btn_white;
        else if (variant === 'secondary') return styles.btn_secondary;
        else if (variant === 'purble') return styles.btn_purple;
        else return styles.btn_primary;
    };
    return (
        <button className={`${styles.btn} ${variants()} ${className}`} {...props}>
            {children}
        </button>
    );
};
