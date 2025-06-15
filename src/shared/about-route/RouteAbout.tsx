'use client';
import { useState } from 'react';
import styles from './Route.module.scss';
import Navigation from '../about/Navigation';
import About from '../about/About';
import RoadMap from '../roadmap/RoadMap';
import { AnimatePresence, motion } from 'framer-motion';
import WhereProfit from '../whereprofit/WhereProfit';

const pages = ['О компании', 'Токеномика', 'RoadMap'];
const RouteAbout = () => {
    const [current, setCurrent] = useState(pages[0]);
    const routes = () => {
        if (current === 'О компании') return 'О нас';
        if (current === 'Токеномика') return 'Где прибыль';
        if (current === 'RoadMap') return 'RoadMap';
    };
    const renderPage = () => {
        if (current === 'О компании') return <About />;
        if (current === 'Токеномика') return <WhereProfit />;
        if (current === 'RoadMap') return <RoadMap />;
    };
    return (
        <div className={styles.route}>
            <div className="container">
                <div className={`${styles.buyCard} df jcc aic`}>Купите STWIST. Или наблюдайте, как это сделают другие :)</div>
            </div>
            <div className={`${styles.navigation} ${styles.about} df`}>
                <div className={`${styles.wrapper} container df jcsb aic`}>
                    <h2>{routes()}</h2>
                    <Navigation links={pages} value={current} onChange={(value) => setCurrent(value)} />
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    {renderPage()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default RouteAbout;
