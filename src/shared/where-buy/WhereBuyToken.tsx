'use client';

import React, { useRef } from 'react';
import styles from './WehereBuyToken.module.scss';
import CardHowBuy from './CardHowBuy';
import IconWaller from './Icons/wallet.svg';
import IconConnect from './Icons/connect.svg';
import IconDowload from './Icons/dowload.svg';
import IconCoin from './Icons/coin.svg';
import Circle from './Circle';
import IconArrow from './Icons/IconArrow';
import { Button } from '../UI/button/Button';
import IconLineDash from './Icons/IconLineDash';

import { motion, useInView } from 'framer-motion';

const cards = [
    {
        icon: IconWaller,
        title: 'Создай кошелёк',
        description: 'Установи MetaMask или Trust Wallet',
    },
    {
        icon: IconCoin,
        title: 'Купи ETH/BNB/USDT',
        description: 'Пополни кошелёк через биржу или P2P',
    },
    {
        icon: IconConnect,
        title: 'Подключи кошелёк',
        description: 'Нажми «Connect Wallet» на сайте',
    },
    {
        icon: IconDowload,
        title: 'Обменивай на $Twist',
        description: 'Через встроенный свап или ссылку!',
    },
];

const WhereBuyToken = () => {
    const ref = useRef(null);
    const refStep = useRef(null);
    const refCard = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 }); // once — анимация только один раз
    const isViewCard = useInView(ref, { once: true, amount: 0.5 }); // once — анимация только один раз
    const step = useInView(refStep, { once: true, amount: 0.5 }); // once — анимация только один раз
    return (
        <div ref={ref} className={`${styles.where} df`} id="buy-token">
            <div className={styles.sideLeft}>
                <motion.svg
                    ref={ref}
                    width="200"
                    height="1088"
                    viewBox="0 0 200 1088"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'top' }}
                >
                    <path d="M77.6253 0H0V909H200L77.6253 0Z" fill="black" />
                </motion.svg>
            </div>
            <div className={styles.wrapper}>
                <div className="container">
                    <div className={styles.header}>
                        <h2>Как купить нашу монету?</h2>
                        <strong>Чтобы потом плакаться!</strong>
                    </div>
                    <motion.div
                        ref={refCard}
                        className={`${styles.cards} df jcsb`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isViewCard ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {cards.map((item, i) => (
                            <CardHowBuy key={i} description={item.description} icon={item.icon} title={item.title} />
                        ))}
                    </motion.div>
                    <div className={`${styles.circles} df jcsa aic`} ref={refStep}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 0.1, duration: 0.3, ease: 'easeOut' }}
                        >
                            <Circle type={1} number={1} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
                        >
                            <IconLineDash />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
                        >
                            <Circle type={2} number={2} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 0.9, duration: 0.3, ease: 'easeOut' }}
                        >
                            <IconLineDash />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 1.2, duration: 0.3, ease: 'easeOut' }}
                        >
                            <Circle type={1} number={3} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 1.5, duration: 0.3, ease: 'easeOut' }}
                        >
                            <IconLineDash />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 1.8, duration: 0.3, ease: 'easeOut' }}
                        >
                            <Circle type={2} number={4} />
                        </motion.div>
                    </div>
                    <div className={`${styles.bottom} df jcsb aic`}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 2, duration: 0.6, ease: 'easeOut' }}
                        >
                            <p>А чтобы тебе было проще я оставил тут кнопку,</p>
                            <p>а то мало ли ты не шаришь в крипте</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 2.3, duration: 0.6, ease: 'easeOut' }}
                        >
                            <IconArrow />
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={step ? { opacity: 1 } : {}}
                            transition={{ delay: 2.5, duration: 0.6, ease: 'easeOut' }}
                        >
                            <Button>НЕ УПУСТИ ШАНС!</Button>
                            <p className={`df jcc`}>+ бонус для первых 100 холдеров</p>
                        </motion.span>
                    </div>
                </div>
            </div>
            <div className={styles.sideRight}>
                <motion.svg
                    ref={ref}
                    width="200"
                    height="1088"
                    viewBox="0 0 200 1088"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'top' }}
                >
                    <path d="M122.375 0H200V909H0L122.375 0Z" fill="black" />
                </motion.svg>
            </div>
        </div>
    );
};

export default WhereBuyToken;
