'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../about/Navigation';
import styles from './Route.module.scss';
import Community from '../community/Community';
import Ambassador from '../ambassador/Ambassador';
import Reviews from '../reviews/Reviews';

const pages = ['Соц-сети', 'Амабасдор', 'Отзывы'];

const RouteComminity = () => {
    const [current, setCurrent] = useState(pages[0]);

    const routes = () => {
        if (current === 'Соц-сети') return 'КОМЬЮНИТИ';
        if (current === 'Амабасдор') return 'Кто это такой? ';
        if (current === 'Отзывы') return 'А вот и отзывы наших ребят';
    };

    const renderPage = () => {
        if (current === 'Соц-сети') return <Community />;
        if (current === 'Амабасдор') return <Ambassador />;
        if (current === 'Отзывы') return <Reviews />;
    };

    return (
        <div className={styles.route}>
            <div className={`${styles.navigation} df jcc `}>
                <div className="container df jcsb aic">
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

export default RouteComminity;
