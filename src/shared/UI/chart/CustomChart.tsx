'use client';
import { BarChart, Bar, CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from './chart.module.scss';
import CustomTooltip from './CustomToolip';
import CustomBar from './CustomBar';
import { useHoveredBar } from './useHoveredBar';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import { useState } from 'react';

const data = [
    { name: 'Июнь', purple: 250000, orange: 100000 },
    { name: 'Июль', purple: 600000, orange: 350000 },
    { name: 'Август', purple: 1200000, orange: 1000000 },
    { name: 'Сентябрь', purple: 1100000, orange: 500000 },
    { name: 'Октябрь', purple: 700000, orange: 1000000 },
    { name: 'Ноябрь', purple: 1200000, orange: 1400000 },
    { name: 'Декабрь', purple: 2000000, orange: 1700000 },
    { name: 'Январь', purple: 2500000, orange: 2200000 },
    { name: 'Февраль', purple: 2300000, orange: 2400000 },
    { name: 'Март', purple: 2500000, orange: 2900000 },
];

const mobileData = [
    // Июнь
    [
        { name: '', purple: 250000, orange: 100000 },
        { name: '', purple: 400000, orange: 350000 },
        { name: '', purple: 700000, orange: 700000 },
        { name: '', purple: 1200000, orange: 1000000 },
        { name: '', purple: 1500000, orange: 1300000 },
    ],
    // Июль
    [
        { name: '', purple: 600000, orange: 350000 },
        { name: '', purple: 800000, orange: 500000 },
        { name: '', purple: 950000, orange: 650000 },
        { name: '', purple: 1200000, orange: 1000000 },
        { name: '', purple: 1500000, orange: 1200000 },
    ],
    // Август
    [
        { name: '', purple: 1200000, orange: 1000000 },
        { name: '', purple: 1400000, orange: 1100000 },
        { name: '', purple: 1600000, orange: 1300000 },
        { name: '', purple: 1800000, orange: 1500000 },
        { name: '', purple: 2000000, orange: 1700000 },
    ],
    // Сентябрь
    [
        { name: '', purple: 1100000, orange: 500000 },
        { name: '', purple: 1150000, orange: 600000 },
        { name: '', purple: 1200000, orange: 800000 },
        { name: '', purple: 1250000, orange: 900000 },
        { name: '', purple: 1300000, orange: 1000000 },
    ],
    // Октябрь
    [
        { name: '', purple: 700000, orange: 1000000 },
        { name: '', purple: 850000, orange: 1100000 },
        { name: '', purple: 950000, orange: 1200000 },
        { name: '', purple: 1050000, orange: 1300000 },
        { name: '', purple: 1200000, orange: 1400000 },
    ],
    // Ноябрь
    [
        { name: '', purple: 1200000, orange: 1400000 },
        { name: '', purple: 1300000, orange: 1500000 },
        { name: '', purple: 1400000, orange: 1600000 },
        { name: '', purple: 1500000, orange: 1700000 },
        { name: '', purple: 1600000, orange: 1800000 },
    ],
    // Декабрь
    [
        { name: '', purple: 2000000, orange: 1700000 },
        { name: '', purple: 2100000, orange: 1800000 },
        { name: '', purple: 2200000, orange: 1900000 },
        { name: '', purple: 2300000, orange: 2000000 },
        { name: '', purple: 2400000, orange: 2100000 },
    ],
    // Январь
    [
        { name: '', purple: 2500000, orange: 2200000 },
        { name: '', purple: 2550000, orange: 2250000 },
        { name: '', purple: 2600000, orange: 2300000 },
        { name: '', purple: 2650000, orange: 2350000 },
        { name: '', purple: 2700000, orange: 2400000 },
    ],
    // Февраль
    [
        { name: '', purple: 2300000, orange: 2400000 },
        { name: '', purple: 2350000, orange: 2450000 },
        { name: '', purple: 2400000, orange: 2500000 },
        { name: '', purple: 2450000, orange: 2550000 },
        { name: '', purple: 2500000, orange: 2600000 },
    ],
    // Март
    [
        { name: '', purple: 2500000, orange: 2900000 },
        { name: '', purple: 2550000, orange: 2950000 },
        { name: '', purple: 2600000, orange: 3000000 },
        { name: '', purple: 2650000, orange: 3050000 },
        { name: '', purple: 2700000, orange: 3100000 },
    ],
];

const moneyChart = ['10M', '5M', '2M', '1M', '500K', '250K', '100K'];
const moneyChartMobile = ['10M', '5M', '2M', '1M', '500K'];
const moneyChart2 = ['10K', '100K', '50K', '20K', '250K', '500K', '750K', '1M', '1.5M', '2M'];
const moneyChart2Mobile = ['10K', '20K', '50K', '100K', '150K'];

const CustomChart = () => {
    const { hovered, onMouseEnter, onMouseLeave } = useHoveredBar();
    const [index, setIndex] = useState(0);

    const screenSize = useWindowSize() ?? 0;

    const handleToggle = (index: number) => {
        if (screenSize > 680) {
            setIndex(0);
        } else {
            console.log('ksfj');
            setIndex(index);
        }
    };

    return (
        <div>
            {screenSize <= 680 && (
                <div className={styles.wrapperChart}>
                    <div className={`${styles.chart} df jcsb`}>
                        {data.map((item, i) => (
                            <span key={item.name} onClick={() => handleToggle(i)} className={`${index === i ? styles.active : ''}`}>
                                {item.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className={`${styles.chartBlock} df aic jcsb`}>
                <div className={`${styles.left} df fdc jcsb`}>
                    {(screenSize > 600 ? moneyChart : moneyChartMobile).map((item) => (
                        <div key={item}>${item}</div>
                    ))}
                </div>

                <div style={{ width: '100%' }}>
                    {screenSize > 680 && (
                        <div className={styles.wrapperChart}>
                            <div className={`${styles.chart} df jcsb`}>
                                {data.map((item, i) => (
                                    <span key={item.name}>{item.name}</span>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className={styles.customChart}>
                        <CustomTooltip hovered={hovered} data={screenSize >= 680 ? data : mobileData[index]} />
                        <ResponsiveContainer width="100%" height={screenSize > 680 ? 280 : 246}>
                            <BarChart data={screenSize >= 680 ? data : mobileData[index]} barCategoryGap="0%">
                                <CartesianGrid strokeDasharray="4 4" />
                                <Bar
                                    dataKey="purple"
                                    fill="#A259FF"
                                    shape={(props: any) => (
                                        <CustomBar {...props} index={props.index} dataKey="purple" onHover={onMouseEnter} onLeave={onMouseLeave} />
                                    )}
                                />
                                <Bar
                                    dataKey="orange"
                                    fill="#F24E1E"
                                    shape={(props: any) => (
                                        <CustomBar {...props} index={props.index} dataKey="orange" onHover={onMouseEnter} onLeave={onMouseLeave} />
                                    )}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={`${styles.bottom} df jcsb`}>
                        {(screenSize >= 680 ? moneyChart2 : moneyChart2Mobile).map((item) => (
                            <div key={item}>{item}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CustomChart;
