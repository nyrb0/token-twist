'use client';
import { useState } from 'react';
import styles from './CustomSelect.module.scss';
import IconArrow from '@/shared/icons/IconArrow';

type Option = {
    label: string;
    value: string;
};

interface CustomSelectProps {
    number: number;
    option: Option;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ option, number }) => {
    const [isOpen, setIsOpen] = useState(number === 1 ? true : false);

    return (
        <div className={`${styles.select} ${isOpen ? styles.open : ''}`}>
            <div className={`${styles.selected} df jcsb`} onClick={() => setIsOpen((prev) => !prev)}>
                {number}. {option.value}
                <span className={styles.arrow}>
                    <IconArrow isActive={isOpen} />
                </span>
            </div>
            <div className={styles.dropdown}>
                <div className={styles.option}>{option.label}</div>
            </div>
        </div>
    );
};

export default CustomSelect;
