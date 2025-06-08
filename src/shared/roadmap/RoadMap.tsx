'use client';

import Image from 'next/image';
import styles from './Roadmap.module.scss';
import RoadmapCard from './RoadmapCard';
import Circle1 from './images/circle1.svg';
import Circle2 from './images/circle2.svg';
import Background from './images/background.svg';
import IconArrowGreen from './images/IconGreenArrow.svg';
import IconArrowBlue from './images/IconBlueArrow.svg';
import IconArrowPurble from './images/IconPurpleArrow.svg';
import Monkey from './images/monkey.png';
import { motion } from 'framer-motion';

const RoadMap = () => {
    return (
        <div className={styles.roadmap}>
            <Image className={styles.circle1} src={Circle1} width={369} height={509} alt="twist token" />
            <Image className={styles.circle2} src={Circle2} width={430} height={487} alt="twist token" />
            <Image className={styles.background} src={Background} width={430} height={487} alt="twist token" />

            <div className="container">
                <div className={`${styles.wrapper} df jcsb`}>
                    <div className={styles.block}>
                        <RoadmapCard
                            delay={0.2}
                            variant={1}
                            lists={[
                                'Бриджинг токена в другие сети',
                                'Запуск метавселенной TokenTwist',
                                `Попытка CEX-листинга 
            (Binance, OKX и т.д.)`,
                                'Глобальный мем-хайп',
                            ]}
                            title="Империя Сообщества"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeOut',
                                delay: 1.3,
                            }}
                        >
                            <Image width={178} height={147} className={styles.green} src={IconArrowGreen} alt="arrow" />
                        </motion.div>
                    </div>
                    <div className={styles.block}>
                        <RoadmapCard
                            delay={1}
                            variant={2}
                            lists={[
                                'Конкурсы мемов и фан-контента',
                                'Подключение инфлюенсеров и мемеров',
                                'Запуск на DEX (Uniswap и др.)',
                                'DAO — сообщество решает, куда двигаться дальше',
                            ]}
                            title="Вирусный взлет"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeOut',
                                delay: 1.8,
                            }}
                        >
                            <Image width={167} height={100} className={styles.blue} src={IconArrowBlue} alt="arrow" />
                        </motion.div>
                        <Image className={styles.monkey} src={Monkey} width={549} height={530} alt="twist token" />
                    </div>
                    <div className={styles.block}>
                        <RoadmapCard
                            delay={2}
                            variant={3}
                            lists={[
                                'Бриджинг токена в другие сети',
                                'Запуск метавселенной TokenTwist',
                                `Попытка CEX-листинга
                                (Binance, OKX и т.д.)`,
                                'Глобальный мем-хайп',
                            ]}
                            title="Империя Сообщества"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeOut',
                                delay: 3,
                            }}
                        >
                            <Image width={135} height={111} className={styles.purble} src={IconArrowPurble} alt="arrow" />
                        </motion.div>
                    </div>
                    <div className={styles.block}>
                        <RoadmapCard
                            delay={3}
                            variant={4}
                            lists={[
                                'Листинг на CoinGecko и CoinMarketCap',
                                'Мини-игра «Twist & Win» с наградами в токенах',
                                'DAO — сообщество решает, куда двигаться дальше',
                                'Дроп фирменного мерча (одежда, стикеры, бананы?)',
                            ]}
                            title="Полезность & Комьюнити"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.mobile}>
                <div className={`${styles.wrapperMobile} df jcsb`}>
                    <RoadmapCard
                        delay={0.2}
                        variant={1}
                        lists={[
                            'Бриджинг токена в другие сети',
                            'Запуск метавселенной TokenTwist',
                            `Попытка CEX-листинга 
            (Binance, OKX и т.д.)`,
                            'Глобальный мем-хайп',
                        ]}
                        title="Империя Сообщества"
                    />
                    <RoadmapCard
                        delay={1}
                        variant={2}
                        lists={[
                            'Конкурсы мемов и фан-контента',
                            'Подключение инфлюенсеров и мемеров',
                            'Запуск на DEX (Uniswap и др.)',
                            'DAO — сообщество решает, куда двигаться дальше',
                        ]}
                        title="Вирусный взлет"
                    />
                    <RoadmapCard
                        delay={2}
                        variant={3}
                        lists={[
                            'Бриджинг токена в другие сети',
                            'Запуск метавселенной TokenTwist',
                            `Попытка CEX-листинга
                                (Binance, OKX и т.д.)`,
                            'Глобальный мем-хайп',
                        ]}
                        title="Империя Сообщества"
                    />
                    <RoadmapCard
                        delay={3}
                        variant={4}
                        lists={[
                            'Листинг на CoinGecko и CoinMarketCap',
                            'Мини-игра «Twist & Win» с наградами в токенах',
                            'DAO — сообщество решает, куда двигаться дальше',
                            'Дроп фирменного мерча (одежда, стикеры, бананы?)',
                        ]}
                        title="Полезность & Комьюнити"
                    />
                </div>
                <div className="df jcc">
                    <Image className={styles.monkeyMobile} src={Monkey} width={330} height={312} alt="twist token" />
                </div>
            </div>
        </div>
    );
};

export default RoadMap;
