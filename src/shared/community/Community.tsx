'use client';

import React, { useRef } from 'react';
import styles from './Community.module.scss';

import SocialBlock from './social/SocialBlock';
import IconsSide from '../icons/IconsSide';
import { useInView, motion } from 'framer-motion';

const Community = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <div ref={ref} className={`${styles.community} df`}>
            <div className={styles.sideLeft}>
                <motion.svg
                    ref={ref}
                    width="200"
                    height="1088"
                    viewBox="0 0 200 1088"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : {}}
                    transition={{ duration: 1.3, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'top' }}
                >
                    <path d="M77.6253 1088H0V0H200L77.6253 1088Z" fill="black" />
                </motion.svg>
                {/* <IconsSide position={'top-left'} /> */}
            </div>

            <div className={`${styles.wrapper} container`}>
                <h4>Хочешь узнать что за место???</h4>
                <p>Сливы, инсайды, мемы. Всё, что нужно, чтобы не остаться нубом. Информация за которую можно и душу продать) </p>
                <div className={styles.blocks}>
                    <SocialBlock
                        title={'Discord'}
                        icon={'discord'}
                        strong="Твой VIP-доступ к комьюнити!"
                        descs={[
                            'Голосовые разборы токеномики и roadmap',
                            'Закрытый VC-чат с китами и аналитиками',
                            'Whitelist-розыгрыши на эксклюзивные продажи',
                            'Дампы полезных материалов (чек-листы, гайды)',
                        ]}
                        href=""
                    />
                    <SocialBlock
                        title={'Twitter'}
                        strong="Инфа от которой зависят твои решения!"
                        icon={'twitter'}
                        descs={[
                            'Прогнозы цены от топовых трейдеров',
                            'Мемы-предсказания (которые потом сбываются)',
                            'Треды с жестким анализом токеномики',
                            'Анонсы партнерств за 24 часа до официальных новостей',
                        ]}
                        href=""
                    />
                    <SocialBlock
                        icon={'tg'}
                        title={'Telegram'}
                        strong="Экстренные уведомления + сливы полезного"
                        descs={[
                            'Сливы инсайдерской инфы перед листингами',
                            'Чат с основателями — задай вопрос лично',
                            'Ранний доступ к Private Sale для подписчиков',
                            'Автоматические уведомления о ключевых событиях',
                        ]}
                        href=""
                    />
                    <SocialBlock
                        title={'TikTok'}
                        strong="Лайфхаки за 15 секунд по коину"
                        icon={'tiktok'}
                        descs={[
                            '15-секундные дампы — «Почему этот токен взлетит»',
                            'Разоблачения скам-проектов (с примерами)',
                            'Интервью с основателями в стиле «Без галстуков»',
                            'ТикТоки с розыгрышами!',
                        ]}
                        href=""
                    />
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
                    initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } : {}}
                    transition={{ duration: 1.3, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'top' }}
                >
                    <path d="M122.375 1088H200V0H0L122.375 1088Z" fill="black" />
                </motion.svg>
                {/* <IconsSide position={'top-right'} /> */}
            </div>
        </div>
    );
};

export default Community;
