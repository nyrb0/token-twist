'use client';
import Image from 'next/image';
import Board from './images/board.png';
import styles from './Hero.module.scss';
import InfoBoard from './InfoBoard';
import ChatLoop from '@/shared/UI/chats/ChatsLoop';
import Monkey from './images/monkey.png';
import Header from '../header/Header';
import { motion } from 'framer-motion';
import { Button } from '@/shared/UI/button/Button';
import { useState } from 'react';

const Hero = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.hero} id="home">
            <div className="container" style={{ marginTop: 20 }}>
                <Header />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.1,
                    ease: 'easeOut',
                }}
                className={`${styles.chat}`}
            >
                <ChatLoop />
            </motion.div>

            <div className={`${styles.board} df `}>
                <div className={styles.container}>
                    <Image src={Board.src} width={1062} height={957} alt="Доска" />
                    <div className={styles.texts}>
                        <InfoBoard />
                    </div>
                </div>
            </div>
            <div className={`${styles.mobile} `}>
                <div className="container">
                    <div className={styles.desc}>
                        <h1>Йоу. Я — Сэм!</h1>
                        <p style={{ maxWidth: 460 }}>Я тот, кто взломал вашу скучную крипту и залил в нее адреналин.</p>
                        <h3>Зачем я здесь?</h3>
                        <p>— Чтобы показать, что 52 миллиона — это только начало.</p>
                        <p>— А так же перевернуть мир кпритовалют!</p>
                        <h2>$TWIST - это не токен? Это вирус?</h2>
                        <p>И сейчас он доберется до вашего портфеля.</p>
                    </div>
                </div>
                <div className="df jcc">
                    <div className={`${styles.mobileBoard}  `}>
                        <div className={`${styles.btns} df fdc`}>
                            <Button variant="white" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                                {visible ? 'Узнать подробнее' : 'Еще сомневаешься?'}
                            </Button>
                            <Button>Заскочить в ракету</Button>
                        </div>
                        <Image src={Board.src} alt="alt" width={391} height={353} />
                        <div className={styles.monkeyMobile}>
                            <Image src={Monkey.src} alt="alt" width={330} height={364} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
