'use client';
import { useState } from 'react';
import styles from './Route.module.scss';
import Navigation from '../about/Navigation';
import About from '../about/About';
import RoadMap from '../roadmap/RoadMap';
import { AnimatePresence, motion } from 'framer-motion';
import WhereProfit from '../whereprofit/WhereProfit';
import { useNavationStore } from '@/app/store/navigation';

const pages = ['О компании', 'Токеномика', 'RoadMap'];
const RouteAbout = () => {
    const { navigation1, setNavigation1 } = useNavationStore();
    const routes = () => {
        if (navigation1 === 'О компании') return 'О нас';
        if (navigation1 === 'Токеномика') return 'Где прибыль';
        if (navigation1 === 'RoadMap') return 'RoadMap';
    };
    const renderPage = () => {
        if (navigation1 === 'О компании') return <About />;
        if (navigation1 === 'Токеномика') return <WhereProfit />;
        if (navigation1 === 'RoadMap') return <RoadMap />;
    };
    return (
        <div className={styles.route}>
            <div className="container">
                <div className={`${styles.buyCard} df jcc aic`}>Купите STWIST. Или наблюдайте, как это сделают другие :)</div>
            </div>
            <div className={`${styles.navigation} ${styles.about} df`}>
                <div className={`${styles.wrapper} container df jcsb aic`}>
                    <h2>{routes()}</h2>
                    <Navigation links={pages} value={navigation1} onChange={(value) => setNavigation1(value)} />
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={navigation1}
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
