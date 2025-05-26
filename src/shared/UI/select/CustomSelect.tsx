'use client';
import { useState, useRef, useEffect } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // const selectedLabel = options.find((option) => option.value === value)?.label || placeholder;

    return (
        <div className={`${styles.select} ${isOpen ? styles.open : ''}`} ref={selectRef}>
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
