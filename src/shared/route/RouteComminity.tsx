'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../about/Navigation';
import styles from './Route.module.scss';
import Community from '../community/Community';
import Ambassador from '../ambassador/Ambassador';
import Reviews from '../reviews/Reviews';
import { useNavationStore } from '@/app/store/navigation';

const pages = ['Соц-сети', 'Амбасадор', 'Отзывы'];

const RouteComminity = () => {
    const { navigation2, setNavigation2 } = useNavationStore();

    const routes = () => {
        if (navigation2 === 'Соц-сети') return 'КОМЬЮНИТИ';
        if (navigation2 === 'Амбасадор') return 'Кто это такой? ';
        if (navigation2 === 'Отзывы') return 'А вот и отзывы наших ребят';
    };

    const renderPage = () => {
        if (navigation2 === 'Соц-сети') return <Community />;
        if (navigation2 === 'Амбасадор') return <Ambassador />;
        if (navigation2 === 'Отзывы') return <Reviews />;
    };

    return (
        <div className={styles.route}>
            <div className={`${styles.navigation} df jcc `}>
                <div className={`${styles.wrapper} container df jcsb aic`}>
                    <h2>{routes()}</h2>
                    <Navigation links={pages} value={navigation2} onChange={(value) => setNavigation2(value)} />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={navigation2}
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
