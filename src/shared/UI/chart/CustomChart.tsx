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
    { name: 'Июль', purple: 600000, orange: 100000 },
    { name: 'Август', purple: 1200000, orange: 1000000 },
    { name: 'Сентябрь', purple: 1100000, orange: 500000 },
    { name: 'Октябрь', purple: 700000, orange: 1000000 },
    { name: 'Ноябрь', purple: 1200000, orange: 1400000 },
    { name: 'Декабрь', purple: 2000000, orange: 1700000 },
    { name: 'Январь', purple: 2500000, orange: 2200000 },
    { name: 'Февраль', purple: 2000000, orange: 2300000 },
    { name: 'Март', purple: 2400000, orange: 2900000 },
];

const mobileData = [
    [
        { name: '', purple: 3524, orange: 5347 },
        { name: '', purple: 3234, orange: 9547 },
        { name: '', purple: 32784, orange: 9347 },
        { name: '', purple: 3245, orange: 953447 },
        { name: '', purple: 2324, orange: 953347 },
    ],
    [
        { name: '', purple: 35524, orange: 85347 },
        { name: '', purple: 323784, orange: 9547 },
        { name: '', purple: 347824, orange: 9747 },
        { name: '', purple: 32425, orange: 95447 },
        { name: '', purple: 7324, orange: 97347 },
    ],
    [
        { name: '', purple: 35524, orange: 853947 },
        { name: '', purple: 3234, orange: 95847 },
        { name: '', purple: 3424, orange: 97477 },
        { name: '', purple: 324425, orange: 953447 },
        { name: '', purple: 73524, orange: 9763347 },
    ],
    [
        { name: '', purple: 39524, orange: 853947 },
        { name: '', purple: 3234, orange: 95847 },
        { name: '', purple: 343224, orange: 97477 },
        { name: '', purple: 3232425, orange: 953447 },
        { name: '', purple: 735424, orange: 9763347 },
    ],
    [
        { name: '', purple: 355277, orange: 853947 },
        { name: '', purple: 3234, orange: 95847 },
        { name: '', purple: 3424, orange: 97477 },
        { name: '', purple: 324425, orange: 953447 },
        { name: '', purple: 3524, orange: 9763347 },
    ],
    [
        { name: '', purple: 35524, orange: 853947 },
        { name: '', purple: 3234, orange: 95847 },
        { name: '', purple: 424, orange: 97477 },
        { name: '', purple: 324425, orange: 953447 },
        { name: '', purple: 73524, orange: 9763347 },
    ],
    [
        { name: '', purple: 35524, orange: 853947 },
        { name: '', purple: 3234, orange: 95847 },
        { name: '', purple: 3424, orange: 97477 },
        { name: '', purple: 24425, orange: 953447 },
        { name: '', purple: 73524, orange: 9763347 },
    ],
    [
        { name: '', purple: 35524, orange: 83947 },
        { name: '', purple: 32343, orange: 9547 },
        { name: '', purple: 3424, orange: 97477 },
        { name: '', purple: 3243425, orange: 93447 },
        { name: '', purple: 73524, orange: 9763347 },
    ],
    [
        { name: '', purple: 35524, orange: 853947 },
        { name: '', purple: 3234, orange: 95847 },
        { name: '', purple: 3424, orange: 97477 },
        { name: '', purple: 324425, orange: 953447 },
        { name: '', purple: 73524, orange: 9763347 },
    ],
    [
        { name: '', purple: 35524, orange: 953947 },
        { name: '', purple: 3434, orange: 9587 },
        { name: '', purple: 3424, orange: 97477 },
        { name: '', purple: 324925, orange: 953447 },
        { name: '', purple: 73524, orange: 9763347 },
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
