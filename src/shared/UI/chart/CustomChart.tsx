'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from './chart.module.scss';
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
const CustomChart = () => (
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

                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={data} barCategoryGap="0%">
                        <CartesianGrid strokeDasharray="4 4" />
                        {/* <XAxis dataKey="name" /> */}
                        {/* <YAxis tickFormatter={(value) => (value >= 1000000 ? `$${value / 1000000}M` : value >= 1000 ? `$${value / 1000}K` : `$${value}`)} /> */}
                        {/* <Tooltip formatter={(value) => `$${value.toLocaleString()}`} labelStyle={{ fontWeight: 'bold' }} /> */}
                        <Bar dataKey="purple" fill="#A259FF" radius={[6, 6, 6, 6]} />
                        <Bar dataKey="orange" fill="#F24E1E" radius={[6, 6, 6, 6]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        <div className={`${styles.bottom} df jcsb`}>
            {moneyChart2.map((item) => (
                <div key={item}>${item}</div>
            ))}
        </div>
    </>
);

export default CustomChart;
