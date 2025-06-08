'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from './chart.module.scss';
import CustomTooltip from './CustomToolip';
import CustomBar from './CustomBar';
import { useHoveredBar } from './useHoveredBar';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
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

const moneyChart = ['10M', '5M', '2M', '1M', '500K', '250K', '100K'];
const moneyChart2 = ['10K', '100K', '50K', '20K', '250K', '500K', '750K', '1M', '1.5M', '2M'];
const CustomChart = () => {
    const { hovered, onMouseEnter, onMouseLeave } = useHoveredBar();
    const screenSize = useWindowSize();
    const chartHeight = () => {
        if (screenSize > 1500) return 280;
        else if (screenSize > 720) return 230;
    };
    return (
        <>
            <div className="df aie jcsb">
                <div className={`${styles.left} df fdc jcsb`}>
                    {moneyChart.map((item) => (
                        <div key={item}>${item}</div>
                    ))}
                </div>

                <div style={{ width: '100%' }}>
                    <div className={`${styles.chart} df jcsb`}>
                        {data.map((item) => (
                            <div key={item.name}>{item.name}</div>
                        ))}
                    </div>

                    <div style={{ position: 'relative' }}>
                        <CustomTooltip hovered={hovered} data={data} />

                        <ResponsiveContainer width="100%" height={280}>
                            <BarChart data={data} barCategoryGap="0%">
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
                </div>
            </div>
            <div className={`${styles.bottom} df jcsb`}>
                {moneyChart2.map((item) => (
                    <div key={item}>${item}</div>
                ))}
            </div>
        </>
    );
};
export default CustomChart;
